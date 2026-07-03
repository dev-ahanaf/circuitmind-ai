import { type Circuit as CircuitJSON } from "@/types/Circuit";

export interface ParsedMarkdown {
  overview: string;
  components: string;
  wiring: string;
  code: string;
  explanation: string;
  troubleshooting: string;
  circuitJson: CircuitJSON | null;
}

/**
 * Normalizes and cleans AI JSON before parsing (strips comments and trailing commas)
 */
function cleanJsonString(str: string): string {
  return str
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Remove single & multiline comments
    .replace(/,\s*([\]}])/g, "$1") // Remove trailing commas
    .trim();
}

/**
 * Extracts sections based on markdown headers
 */
export function parseMarkdownSections(markdown: string): ParsedMarkdown {
  const sections: ParsedMarkdown = {
    overview: "",
    components: "",
    wiring: "",
    code: "",
    explanation: "",
    troubleshooting: "",
    circuitJson: null,
  };

  if (!markdown) return sections;

  // Split by markdown headings
  const headingRegex = /^(?:##?|###?)\s+(.+)$/gm;
  const parts: Array<{ title: string; startIndex: number; endIndex: number }> = [];

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const title = match[1].toLowerCase().trim();
    const startIndex = match.index + match[0].length;
    parts.push({ title, startIndex, endIndex: -1 });
  }

  // Calculate endIndex for each heading block
  for (let i = 0; i < parts.length; i++) {
    parts[i].endIndex = i < parts.length - 1 ? parts[i + 1].startIndex - (markdown.substring(parts[i + 1].startIndex - 10, parts[i + 1].startIndex).match(/^(?:##?|###?)\s+/gm) ? 12 : 5) : markdown.length;
  }

  // Assign section contents based on keywords in title
  parts.forEach((p) => {
    const rawContent = markdown.substring(p.startIndex, p.endIndex).trim();

    if (p.title.includes("overview") || p.title.includes("introduction")) {
      sections.overview += rawContent + "\n\n";
    } else if (p.title.includes("component") || p.title.includes("parts")) {
      sections.components += rawContent + "\n\n";
    } else if (p.title.includes("wiring") || p.title.includes("connection")) {
      sections.wiring += rawContent + "\n\n";
    } else if (p.title.includes("code") || p.title.includes("program") || p.title.includes("sketch") || p.title.includes("arduino")) {
      sections.code += rawContent + "\n\n";
    } else if (p.title.includes("explanation") || p.title.includes("how it works")) {
      sections.explanation += rawContent + "\n\n";
    } else if (p.title.includes("troubleshoot") || p.title.includes("testing") || p.title.includes("debug")) {
      sections.troubleshooting += rawContent + "\n\n";
    } else if (p.title.includes("json") || p.title.includes("schematic data")) {
      // Direct JSON extraction
      try {
        const jsonMatch = rawContent.match(/```json\s*([\s\S]*?)```/);
        const jsonText = jsonMatch ? jsonMatch[1] : rawContent;
        const cleaned = cleanJsonString(jsonText);
        sections.circuitJson = JSON.parse(cleaned);
      } catch (err) {
        console.error("Failed to parse circuitJson section:", err);
      }
    }
  });

  // Fallback: If no explicit json heading, search anywhere in markdown
  if (!sections.circuitJson) {
    try {
      const globalJsonMatch = markdown.match(/```json\s*([\s\S]*?)```/);
      if (globalJsonMatch) {
        const cleaned = cleanJsonString(globalJsonMatch[1]);
        const parsed = JSON.parse(cleaned);
        // Verify it contains components
        if (parsed && Array.isArray(parsed.components)) {
          sections.circuitJson = parsed;
        }
      }
    } catch (err) {
      console.warn("Global markdown JSON search failed to parse:", err);
    }
  }

  // Cleanup extra trailing spaces
  sections.overview = sections.overview.trim();
  sections.components = sections.components.trim();
  sections.wiring = sections.wiring.trim();
  sections.code = sections.code.trim();
  sections.explanation = sections.explanation.trim();
  sections.troubleshooting = sections.troubleshooting.trim();

  // If no sections were parsed at all (flat text), treat whole thing as overview
  if (!sections.overview && !sections.components && !sections.wiring) {
    sections.overview = markdown;
  }

  return sections;
}
