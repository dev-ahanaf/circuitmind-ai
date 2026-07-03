import React from "react";
import { type Circuit } from "@/types/Circuit";
import { EditorProvider } from "@/editor/EditorContext";
import { Toolbar } from "@/editor/Toolbar";
import { Canvas } from "@/editor/Canvas";
import { Sidebar } from "@/editor/Sidebar";

interface CircuitRendererProps {
  data: Circuit;
}

export const CircuitRenderer: React.FC<CircuitRendererProps> = ({ data }) => {
  return (
    <EditorProvider initialData={data}>
      <div className="relative flex h-[620px] w-full flex-col overflow-hidden rounded-xl border border-border bg-slate-950/20 dark:bg-slate-900/30">
        {/* 1. Workspace Control Toolbar */}
        <Toolbar />
        
        <div className="flex flex-1 overflow-hidden h-[calc(100%-45px)]">
          {/* 2. Main CAD Interactive SVG Canvas */}
          <Canvas />
          
          {/* 3. Sidebar Properties Inspector */}
          <Sidebar />
        </div>
      </div>
    </EditorProvider>
  );
};
