"use client";
import { Card } from "@/components/ui/card";
import {
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import { useCallback } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "reactflow/dist/style.css";
import { Chart } from "@/components/personnel/chart";

const initNode = [
  { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 5 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
];

const initEdge = [{ id: "e1-2", source: "1", target: "2" }];

export default function Page() {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <Chart />
    </div>
    </>
  );
}
