import { Label } from "@radix-ui/react-label";
import { Card, CardContent } from "../ui/card";
import { IDashboard } from "./schema";

export const Dashboard = (props: IDashboard) => {
  const { total_documents, pending_documents, cancel_documents } = props;
  return (
    <>
      <div className="grid gap-3">
        <div className="mb-3">
          <Label>Dashboard</Label>
        </div>
        <Card className="grid grid-cols-1">
          <CardContent className="text-xl">
            <div className="mb-3">
              <Label>ต้องการเรียนรู้เพิ่มเติม?</Label>
            </div>
          </CardContent>
          <CardContent>
            <div>
              <Label>bla bla bla</Label>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="text-sm">
              <div>
                <Label>เอกสารทั้งหมด {total_documents}</Label>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-sm">
              <div>
                <Label>เอกสารรอการอนุมัติ {pending_documents}</Label>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-sm">
              <div>
                <Label>เอกสารถูกยกเลิก {cancel_documents}</Label>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-rows-6 grid-cols-3 gap-4">
          <Card className="row-span-6 col-span-2">
            <CardContent className="text-sm">
              <div>
                <Label>กราฟการเปลี่ยนแปลงนโยบาย(ภายในปี)</Label>
              </div>
            </CardContent>
          </Card>
          <Card className="row-span-6" >
            <CardContent className="text-sm">
              <div>
                <Label>รายการเอกสารรอการอนุมัติ (ภายในวัน)</Label>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1">
          <Card className="">
            <CardContent className="text-sm">
              <div>
                <Label>กราฟข้อมูลเอกสารแบ่งแยกตามแผนก/ฝ่าย(ภายในปี)</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
};
