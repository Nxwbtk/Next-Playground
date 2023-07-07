"use client"
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
import 'reactflow/dist/style.css';

const initNode = [
  { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 5 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
]

const initEdge = [
  { id: "e1-2", source: "1", target: "2" },
]

export const Chart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNode);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdge);
  const onConnect = useCallback(
    (params: any) => setEdges((els: any) => addEdge(params, els)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handleSaveChart = () => {
    // const data = {
    //   Nodes: nodes,
    //   Edges: edges,
    // };
    // mutateDataChart.mutate(data);
    // setToasterProps({
    //   open: true,
    //   message: "Chart saved successfully",
    //   severity: "success",
    //   autoHideDuration: 6000,
    // });
  };
  return (
    <>
      <Card className="w-1/2 h-1/2">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Label>ข้อมูลโครงสร้างองค์กร : Lexnetix Co.,Ltd</Label>
          </div>
          {/* <div className="grid grid-cols-1"> */}
            <Button onClick={handleSaveChart} className="w-auto">บันทึก</Button>
          {/* </div> */}
        </div>
        <div>
          <div className="h-96 w-96.5 border border-gray-500 rounded-5 bg-gray-200">
            <ReactFlowProvider>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                //   nodeTypes={customNode}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
              >
                {/* <Background color="#858383" /> */}
                <MiniMap nodeStrokeWidth={3} zoomable pannable />
                <Controls />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
        </div>
      </Card>
    </>
  );
}