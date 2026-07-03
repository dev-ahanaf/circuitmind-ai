import { useEffect } from "react";
import { useEditor } from "./EditorContext";

export function useKeyboardShortcuts() {
  const { undo, redo, copySelected, pasteCopied, deleteSelected, selectAll } = useEditor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bypass when typing in search bars or form fields
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (cmdOrCtrl && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if (cmdOrCtrl && e.key.toLowerCase() === "y") {
        e.preventDefault();
        redo();
      } else if (cmdOrCtrl && e.key.toLowerCase() === "c") {
        e.preventDefault();
        copySelected();
      } else if (cmdOrCtrl && e.key.toLowerCase() === "v") {
        e.preventDefault();
        pasteCopied();
      } else if (cmdOrCtrl && e.key.toLowerCase() === "a") {
        e.preventDefault();
        selectAll();
      } else if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        deleteSelected();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, copySelected, pasteCopied, deleteSelected, selectAll]);
}
