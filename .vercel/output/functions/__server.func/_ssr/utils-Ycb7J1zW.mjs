import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Ycb7J1zW.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function escapeHtml(text) {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function exportMarkdownToPDF(title, mdText) {
	let lines = mdText.split("\n");
	let inTable = false;
	let tableRows = [];
	let parsedLines = [];
	for (let line of lines) if (line.trim().startsWith("|")) {
		if (!inTable) {
			inTable = true;
			tableRows = [];
		}
		tableRows.push(line);
	} else {
		if (inTable) {
			inTable = false;
			let tableHtml = "<table class=\"min-w-full border border-gray-200 my-4 text-left border-collapse\"><tbody>";
			let isFirstRow = true;
			for (let row of tableRows) {
				const cells = row.split("|").slice(1, -1).map((c) => c.trim());
				if (cells.every((c) => c.match(/^:-+|-+:|:-+:/))) continue;
				if (isFirstRow) {
					tableHtml += `<tr class="bg-gray-100 font-semibold border-b border-gray-300">${cells.map((c) => `<th class="px-4 py-2 border border-gray-200 text-sm">${c}</th>`).join("")}</tr>`;
					isFirstRow = false;
				} else tableHtml += `<tr class="border-b border-gray-200 hover:bg-gray-50">${cells.map((c) => `<td class="px-4 py-2 border border-gray-200 text-sm">${c}</td>`).join("")}</tr>`;
			}
			tableHtml += "</tbody></table>";
			parsedLines.push(tableHtml);
		}
		parsedLines.push(line);
	}
	if (inTable) {
		let tableHtml = "<table class=\"min-w-full border border-gray-200 my-4 text-left border-collapse\"><tbody>";
		let isFirstRow = true;
		for (let row of tableRows) {
			const cells = row.split("|").slice(1, -1).map((c) => c.trim());
			if (cells.every((c) => c.match(/^:-+|-+:|:-+:/))) continue;
			if (isFirstRow) {
				tableHtml += `<tr class="bg-gray-100 font-semibold border-b border-gray-300">${cells.map((c) => `<th class="px-4 py-2 border border-gray-200 text-sm">${c}</th>`).join("")}</tr>`;
				isFirstRow = false;
			} else tableHtml += `<tr class="border-b border-gray-200 hover:bg-gray-50">${cells.map((c) => `<td class="px-4 py-2 border border-gray-200 text-sm">${c}</td>`).join("")}</tr>`;
		}
		tableHtml += "</tbody></table>";
		parsedLines.push(tableHtml);
	}
	let bodyContent = parsedLines.join("\n");
	bodyContent = bodyContent.replace(/```(\w+)?([\s\S]*?)```/g, (_, __, code) => {
		return `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed"><code>${escapeHtml(code.trim())}</code></pre>`;
	});
	bodyContent = bodyContent.replace(/^(\s*)\* (.*$)/gim, "<li class=\"ml-6 list-disc my-1\">$2</li>").replace(/^(\s*)- (.*$)/gim, "<li class=\"ml-6 list-disc my-1\">$2</li>").replace(/^(\s*)\d+\. (.*$)/gim, "<li class=\"ml-6 list-decimal my-1\">$2</li>");
	bodyContent = bodyContent.replace(/^# (.*$)/gim, "<h1 class=\"text-3xl font-bold mt-8 mb-4 text-blue-900 border-b-2 border-blue-100 pb-2\">$1</h1>").replace(/^## (.*$)/gim, "<h2 class=\"text-2xl font-semibold mt-6 mb-3 text-blue-800 border-b border-gray-200 pb-1\">$1</h2>").replace(/^### (.*$)/gim, "<h3 class=\"text-xl font-medium mt-5 mb-2 text-gray-800\">$1</h3>");
	bodyContent = bodyContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code class=\"bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono\">$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" class=\"text-blue-600 hover:underline\" target=\"_blank\">$1</a>");
	bodyContent = bodyContent.split("\n").map((line) => {
		const trimmed = line.trim();
		if (trimmed.startsWith("<h") || trimmed.startsWith("<li") || trimmed.startsWith("<table") || trimmed.startsWith("<tr") || trimmed.startsWith("<th") || trimmed.startsWith("<td") || trimmed.startsWith("</tr") || trimmed.startsWith("</tb") || trimmed.startsWith("<pre") || trimmed.startsWith("<code") || trimmed.startsWith("</pre") || trimmed.startsWith("</code") || trimmed.startsWith("</li") || trimmed === "") return line;
		return `<p class="my-3 leading-relaxed text-gray-700">${line}</p>`;
	}).join("\n");
	const printWindow = window.open("", "_blank");
	if (!printWindow) {
		alert("Please allow popups to export PDF");
		return;
	}
	printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
          @media print {
            body { font-family: system-ui, -apple-system, sans-serif; color: #1f2937; padding: 0; }
            h1, h2, h3 { page-break-after: avoid; }
            pre, table, tr { page-break-inside: avoid; }
            a { text-decoration: none; color: #1f2937; }
          }
          body { font-family: system-ui, -apple-system, sans-serif; color: #1f2937; max-width: 850px; margin: 40px auto; padding: 0 40px; }
          h1, h2, h3 { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
        </style>
      </head>
      <body>
        <div class="border-b pb-4 mb-6">
          <h1 class="text-3xl font-bold text-gray-900">${title}</h1>
          <p class="text-sm text-gray-500 mt-1">Generated by CircuitMind AI</p>
        </div>
        <div class="prose max-w-none">
          ${bodyContent}
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        <\/script>
      </body>
    </html>
  `);
	printWindow.document.close();
}
//#endregion
export { exportMarkdownToPDF as n, cn as t };
