import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toPng } from "html-to-image";
import { toast } from "sonner";

/**
 * Extracts a specific section's content from the markdown output based on section headers
 */
export function getSectionText(markdown: string, heading: string): string {
  if (!markdown) return "";
  const lines = markdown.split("\n");
  let inSection = false;
  const sectionLines: string[] = [];
  const normalizedHeading = heading.toLowerCase().trim();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#")) {
      const hText = line.replace(/^#+\s+/, "").toLowerCase().trim();
      if (hText.includes(normalizedHeading)) {
        inSection = true;
        continue;
      } else if (inSection) {
        break;
      }
    }
    if (inSection) {
      sectionLines.push(lines[i]);
    }
  }
  return sectionLines.join("\n").trim();
}

/**
 * Extracts the contents inside a markdown code block (e.g. ```cpp ... ```)
 */
export function getCodeBlock(text: string): string | null {
  if (!text) return null;
  const match = text.match(/```(?:cpp|arduino|c|json)?\s*([\s\S]*?)```/);
  return match ? match[1].trim() : null;
}

/**
 * Parses a markdown table into headers and rows for jspdf-autotable
 */
export function parseMarkdownTable(markdownTableText: string): { headers: string[]; rows: string[][] } | null {
  if (!markdownTableText) return null;
  const lines = markdownTableText.split("\n").map(l => l.trim()).filter(l => l.startsWith("|"));
  if (lines.length < 2) return null;

  const parsedRows: string[][] = [];
  let headers: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const cells = lines[i].split("|").slice(1, -1).map(c => c.trim());
    if (cells.length === 0) continue;
    
    // Check if it's a divider row like |---|---|
    const isDivider = cells.every(c => c.match(/^:?-+:?$/));
    if (isDivider) continue;

    if (headers.length === 0) {
      headers = cells;
    } else {
      parsedRows.push(cells);
    }
  }

  if (headers.length === 0) return null;
  return { headers, rows: parsedRows };
}

/**
 * Checks if current Y position + block height exceeds page height, and triggers a page break if so
 */
function checkPageBreak(pdf: jsPDF, y: number, requiredHeight: number): number {
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  if (y + requiredHeight > pageHeight - margin) {
    pdf.addPage();
    return margin; // Reset Y to top margin on the new page
  }
  return y;
}

/**
 * Formats and adds a markdown section to the PDF report
 */
function addSection(pdf: jsPDF, title: string, text: string, currentY: number): number {
  if (!text) return currentY;
  
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 15;
  
  // Heading height: ~12mm
  currentY = checkPageBreak(pdf, currentY, 12);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(30, 41, 59); // slate-800
  pdf.text(title, margin, currentY);
  currentY += 5;
  
  // Horizontal separator line
  pdf.setDrawColor(226, 232, 240); // slate-200
  pdf.setLineWidth(0.5);
  pdf.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 6;
  
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9.5);
  pdf.setTextColor(71, 85, 105); // slate-600
  
  const paragraphs = text.split("\n\n");
  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;
    
    const lines = trimmed.split("\n");
    for (const line of lines) {
      const isBullet = line.startsWith("* ") || line.startsWith("- ") || /^\d+\.\s/.test(line);
      let renderText = line;
      let leftMargin = margin;
      
      if (isBullet) {
        leftMargin = margin + 5;
        if (line.startsWith("* ") || line.startsWith("- ")) {
          renderText = "• " + line.substring(2);
        }
      }
      
      const wrappedLines = pdf.splitTextToSize(renderText, pageWidth - leftMargin - margin);
      const requiredHeight = wrappedLines.length * 4.8;
      currentY = checkPageBreak(pdf, currentY, requiredHeight);
      pdf.text(wrappedLines, leftMargin, currentY);
      currentY += requiredHeight + 1.2;
    }
    currentY += 2; // paragraph spacing
  }
  
  return currentY + 3; // spacing after section
}

/**
 * Formats and adds a code block to the PDF report (monospace, monospace border, wrapping)
 */
function addCodeBlock(pdf: jsPDF, title: string, code: string, currentY: number): number {
  if (!code) return currentY;
  
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  
  // Title
  currentY = checkPageBreak(pdf, currentY, 12);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(30, 41, 59);
  pdf.text(title, margin, currentY);
  currentY += 5;
  
  // Horizontal separator line
  pdf.setDrawColor(226, 232, 240);
  pdf.setLineWidth(0.5);
  pdf.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 6;
  
  pdf.setFont("courier", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(31, 41, 55); // dark gray
  
  const codeLines = code.split("\n");
  
  for (const line of codeLines) {
    const wrapped = pdf.splitTextToSize(line, contentWidth - 4);
    const requiredHeight = wrapped.length * 3.8;
    
    // Check page break
    const nextY = checkPageBreak(pdf, currentY, requiredHeight);
    if (nextY === margin) {
      currentY = margin;
    }
    
    // Left slate border line for code block style
    pdf.setDrawColor(203, 213, 225); // slate-300
    pdf.setLineWidth(1.5);
    pdf.line(margin, currentY - 1.5, margin, currentY + requiredHeight - 1.5);
    
    pdf.text(wrapped, margin + 4, currentY);
    currentY += requiredHeight;
  }
  
  return currentY + 5;
}

/**
 * Exports the project details and rendering diagram as a PDF report
 */
export async function exportProjectPDF({
  title,
  query,
  markdown,
  circuitJson,
  elementId = "circuit-diagram-export"
}: {
  title: string;
  query: string;
  markdown: string;
  circuitJson: any;
  elementId?: string;
}) {
  const toastId = toast.loading("Generating PDF report...");
  
  try {
    let diagramImage: string | null = null;
    const diagramNode = document.getElementById(elementId);
    
    if (diagramNode) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600)); // Ensure fully layouted
        diagramImage = await toPng(diagramNode, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
        });
      } catch (err: any) {
        console.error("Diagram capture failed:", err);
        toast.warning("Failed to render diagram image in PDF, generating document text-only.", { duration: 4000 });
      }
    } else if (circuitJson) {
      console.warn(`Element with ID #${elementId} not found in DOM`);
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - margin * 2;
    
    let y = 20;
    
    // Document Title
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.setTextColor(15, 23, 42); // slate-900
    pdf.text("CircuitMind AI Project Report", margin, y);
    y += 10;
    
    // Project Title
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13.5);
    pdf.setTextColor(37, 99, 235); // Blue
    pdf.text(title, margin, y);
    y += 8;
    
    // Metadata extraction
    const difficultyMatch = markdown.match(/\*\*Difficulty:\*\*\s*(.+)$/im);
    const difficulty = difficultyMatch ? difficultyMatch[1].trim() : "N/A";
    
    const costMatch = markdown.match(/\*\*Estimated Cost:\*\*\s*(.+)$/im);
    const cost = costMatch ? costMatch[1].trim() : "N/A";
    
    const timeMatch = markdown.match(/\*\*Time to build:\*\*\s*(.+)$/im);
    const time = timeMatch ? timeMatch[1].trim() : "N/A";
    
    autoTable(pdf, {
      body: [
        ["Query / Prompt:", query || title],
        ["Difficulty Level:", difficulty],
        ["Estimated Cost:", cost],
        ["Time to Build:", time],
      ],
      startY: y,
      margin: { left: margin, right: margin },
      theme: "plain",
      styles: { fontSize: 9, cellPadding: 1.5, font: "helvetica" },
      columnStyles: {
        0: { fontStyle: "bold", textColor: [71, 85, 105], width: 35 },
        1: { textColor: [15, 23, 42] }
      }
    });
    
    y = (pdf as any).lastAutoTable.finalY + 10;
    
    // Extract & Render Project Overview
    let overviewText = getSectionText(markdown, "overview");
    overviewText = overviewText
      .split("\n")
      .filter(line => !line.toLowerCase().includes("difficulty:") && 
                      !line.toLowerCase().includes("estimated cost:") && 
                      !line.toLowerCase().includes("time to build:"))
      .join("\n")
      .trim();
      
    if (overviewText) {
      y = addSection(pdf, "1. Project Overview", overviewText, y);
    }
    
    // Render captured diagram
    if (diagramImage) {
      y = checkPageBreak(pdf, y, 90);
      
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(30, 41, 59);
      pdf.text("2. Visual Circuit Diagram", margin, y);
      y += 5;
      
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 6;
      
      const imageProps = pdf.getImageProperties(diagramImage);
      let imgWidth = contentWidth;
      let imgHeight = (imageProps.height * imgWidth) / imageProps.width;
      
      if (imgHeight > 95) {
        imgHeight = 95;
        imgWidth = (imageProps.width * imgHeight) / imageProps.height;
      }
      
      const xOffset = margin + (contentWidth - imgWidth) / 2;
      pdf.addImage(diagramImage, "PNG", xOffset, y, imgWidth, imgHeight);
      y += imgHeight + 10;
    }
    
    // Required Components Table
    const componentsText = getSectionText(markdown, "component");
    const componentsTable = parseMarkdownTable(componentsText);
    
    if (componentsTable) {
      y = checkPageBreak(pdf, y, 30);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(30, 41, 59);
      pdf.text("3. Required Components", margin, y);
      y += 5;
      
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 6;
      
      autoTable(pdf, {
        head: [componentsTable.headers],
        body: componentsTable.rows,
        startY: y,
        margin: { left: margin, right: margin },
        theme: "striped",
        headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255] },
        styles: { font: "helvetica", fontSize: 8.5, cellPadding: 2 }
      });
      
      y = (pdf as any).lastAutoTable.finalY + 10;
    } else if (componentsText) {
      y = addSection(pdf, "3. Required Components", componentsText, y);
    }
    
    // Wiring Connections Table
    const wiringText = getSectionText(markdown, "wiring");
    const wiringTable = parseMarkdownTable(wiringText);
    
    if (wiringTable) {
      y = checkPageBreak(pdf, y, 30);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(30, 41, 59);
      pdf.text("4. Wiring Connections", margin, y);
      y += 5;
      
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 6;
      
      autoTable(pdf, {
        head: [wiringTable.headers],
        body: wiringTable.rows,
        startY: y,
        margin: { left: margin, right: margin },
        theme: "striped",
        headStyles: { fillColor: [71, 85, 105], textColor: [255, 255, 255] },
        styles: { font: "helvetica", fontSize: 8.5, cellPadding: 2 }
      });
      
      y = (pdf as any).lastAutoTable.finalY + 10;
    } else if (wiringText) {
      y = addSection(pdf, "4. Wiring Connections", wiringText, y);
    }
    
    // Circuit Explanation
    const explanationText = getSectionText(markdown, "explanation");
    if (explanationText) {
      y = addSection(pdf, "5. Circuit Explanation", explanationText, y);
    }
    
    // Assembly
    const assemblyText = getSectionText(markdown, "assembly");
    if (assemblyText) {
      y = addSection(pdf, "6. Step-by-Step Assembly", assemblyText, y);
    }
    
    // Code
    const codeText = getSectionText(markdown, "code");
    const arduinoCode = getCodeBlock(codeText) || codeText;
    if (arduinoCode) {
      y = addCodeBlock(pdf, "7. Arduino / MCU Code", arduinoCode, y);
    }
    
    // Troubleshooting
    const troubleshootText = getSectionText(markdown, "troubleshooting");
    if (troubleshootText) {
      y = addSection(pdf, "8. Testing & Troubleshooting", troubleshootText, y);
    }
    
    // Safety
    const safetyText = getSectionText(markdown, "safety");
    if (safetyText) {
      y = addSection(pdf, "9. Safety Tips", safetyText, y);
    }
    
    // Checklist
    const checklistText = getSectionText(markdown, "checklist");
    if (checklistText) {
      y = addSection(pdf, "10. Final Checklist", checklistText, y);
    }
    
    pdf.save(`${title.replace(/[^a-z0-9]/gi, "_")}_Project_Report.pdf`);
    toast.success("PDF report downloaded successfully!", { id: toastId });
  } catch (err: any) {
    console.error("PDF generation failed:", err);
    toast.error("Failed to generate PDF: " + err.message, { id: toastId });
  }
}

/**
 * Downloads the raw circuit JSON data
 */
export function exportProjectJSON(title: string, circuitJson: any) {
  if (!circuitJson) {
    toast.error("No circuit JSON available to export.");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(circuitJson, null, 2));
  const trigger = document.createElement("a");
  trigger.href = dataStr;
  trigger.download = `${title.replace(/[^a-z0-9]/gi, "_")}_circuit_design.json`;
  trigger.click();
  toast.success("Circuit JSON exported successfully!");
}

/**
 * Downloads the Arduino/MCU C++ code as a .ino file
 */
export function exportProjectCode(title: string, codeSectionText: string) {
  if (!codeSectionText) {
    toast.error("No code available to export.");
    return;
  }
  const arduinoCode = getCodeBlock(codeSectionText) || codeSectionText.trim();
  if (!arduinoCode) {
    toast.error("No code available to export.");
    return;
  }

  const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(arduinoCode);
  const trigger = document.createElement("a");
  trigger.href = dataStr;
  trigger.download = `${title.replace(/[^a-z0-9]/gi, "_")}_code.ino`;
  trigger.click();
  toast.success("Arduino code (.ino) exported successfully!");
}
