import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { EngineeringProjectModel } from "../schema/EngineeringProjectModel";
import { generateProjectReport } from "./generateProjectReport";

/**
 * Compiles and downloads a print-ready PDF using the central EngineeringProjectModel.
 * Ensures page wrapping, monospace code scaling, and correct BDT symbol fallback.
 */
export async function generatePDFReport(model: EngineeringProjectModel, elementId = "circuit-diagram-export") {
  const toastId = toast.loading("Generating professional PDF report...");

  try {
    let diagramPng: string | undefined;
    const diagramNode = document.getElementById(elementId);
    
    if (diagramNode) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        diagramPng = await toPng(diagramNode, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
        });
      } catch (err) {
        console.error("Diagram capture failed:", err);
      }
    }

    const report = generateProjectReport(model, { diagramPng });

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    // Document Title
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.setTextColor(15, 23, 42); // slate-900
    pdf.text(report.title, margin, y);
    y += 7;

    // Brand and designer metadata
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(100, 116, 139); // slate-500
    pdf.text("Designed & Developed by Fayek Ahanaf (CIS, Daffodil International University)", margin, y);
    y += 10;

    // Project metadata table
    autoTable(pdf, {
      body: [
        ["Project ID:", report.metadata.projectId],
        ["Difficulty:", report.metadata.difficulty],
        ["Estimated Cost:", `BDT ${report.metadata.estimatedCostBDT.toLocaleString()}`],
        ["Time to Build:", `${report.metadata.timeToBuildHours} hours`],
      ],
      startY: y,
      margin: { left: margin, right: margin },
      theme: "plain",
      styles: { fontSize: 9.5, cellPadding: 1.5, font: "helvetica" },
      columnStyles: {
        0: { fontStyle: "bold", textColor: [71, 85, 105], width: 35 },
        1: { textColor: [15, 23, 42] }
      }
    });

    y = (pdf as any).lastAutoTable.finalY + 10;

    const cleanBDTSymbol = (txt: string) => txt.replace(/৳/g, "BDT ");

    const checkPageBreak = (requiredHeight: number): number => {
      if (y + requiredHeight > pageHeight - margin) {
        pdf.addPage();
        return margin; // Reset Y on new page
      }
      return y;
    };

    // Process report sections
    for (const sec of report.sections) {
      if (sec.type === "image") {
        y = checkPageBreak(110);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(30, 41, 59);
        pdf.text(sec.title, margin, y);
        y += 6;

        if (sec.content) {
          try {
            const imageProps = pdf.getImageProperties(sec.content);
            let imgWidth = contentWidth;
            let imgHeight = (imageProps.height * imgWidth) / imageProps.width;

            if (imgHeight > 95) {
              imgHeight = 95;
              imgWidth = (imageProps.width * imgHeight) / imageProps.height;
            }

            const xOffset = margin + (contentWidth - imgWidth) / 2;
            pdf.addImage(sec.content, "PNG", xOffset, y, imgWidth, imgHeight);
            y += imgHeight + 10;
          } catch (err) {
            console.error("Embedding diagram PNG failed:", err);
          }
        } else {
          pdf.setFont("helvetica", "italic");
          pdf.setFontSize(9.5);
          pdf.text("Circuit diagram could not be captured. Please regenerate the diagram and try again.", margin, y);
          y += 10;
        }
      } else if (sec.type === "table") {
        y = checkPageBreak(35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(30, 41, 59);
        pdf.text(sec.title, margin, y);
        y += 6;

        const tableData = parseMarkdownTable(sec.content);
        if (tableData) {
          const cleanRows = tableData.rows.map(row => row.map(cell => cleanBDTSymbol(cell)));
          const cleanHeaders = tableData.headers.map(h => cleanBDTSymbol(h));

          autoTable(pdf, {
            head: [cleanHeaders],
            body: cleanRows,
            startY: y,
            margin: { left: margin, right: margin },
            theme: "striped",
            headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255] },
            styles: { font: "helvetica", fontSize: 8.5, cellPadding: 2 }
          });
          y = (pdf as any).lastAutoTable.finalY + 10;
        } else {
          const cleanText = cleanBDTSymbol(sec.content);
          const splitText = pdf.splitTextToSize(cleanText, contentWidth);
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(9.5);
          pdf.text(splitText, margin, y);
          y += (splitText.length * 5) + 10;
        }
      } else if (sec.type === "code") {
        y = checkPageBreak(25);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(30, 41, 59);
        pdf.text(sec.title, margin, y);
        y += 6;

        pdf.setFont("courier", "normal");
        pdf.setFontSize(7.5);
        pdf.setTextColor(15, 118, 110); // teal-700

        const splitCode = pdf.splitTextToSize(sec.content, contentWidth);
        const blockHeight = splitCode.length * 4.2 + 6;

        y = checkPageBreak(blockHeight);
        pdf.setFillColor(248, 250, 252);
        pdf.rect(margin, y - 2, contentWidth, blockHeight, "F");

        pdf.text(splitCode, margin + 4, y + 3);
        y += blockHeight + 10;
      } else {
        const cleanText = cleanBDTSymbol(sec.content);
        const splitText = pdf.splitTextToSize(cleanText, contentWidth);
        const textHeight = splitText.length * 5 + 10;

        y = checkPageBreak(textHeight);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(30, 41, 59);
        pdf.text(sec.title, margin, y);
        y += 6;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9.5);
        pdf.setTextColor(51, 65, 85);
        pdf.text(splitText, margin, y);
        y += (splitText.length * 5) + 10;
      }
    }

    // Page Numbering Footer on all pages
    const totalPages = (pdf as any).internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 15, pageHeight - 10);
      pdf.text("CircuitMind AI — Prototyping Report", margin, pageHeight - 10);
    }

    pdf.save(`${model.metadata.title.replace(/[^a-z0-9]/gi, "_")}_Project_Report.pdf`);
    toast.success("PDF report downloaded successfully!", { id: toastId });
  } catch (err: any) {
    console.error("PDF generation failed:", err);
    toast.error("Failed to generate PDF: " + err.message, { id: toastId });
  }
}

function parseMarkdownTable(markdownTableText: string): { headers: string[]; rows: string[][] } | null {
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
