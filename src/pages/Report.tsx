import { Button, Spin } from "antd";

import { Suspense, useState } from "react";
import { lazyLoad } from "../helper/lazy-load";

const ReportDetail = lazyLoad("components/Report/ReportDetail", "ReportDetail");


export const Report = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <h1>Report</h1>

      <div style={{ display: "flex", columnGap: 10 }}>
        <Button
          onClick={async () => {
            import("../helper/sum").then((module: any) => {
              alert("Sum::" + module.sum(1, 2));
            });
          }}
        >
          Sum
        </Button>
        <Button
          onClick={async () => {
            const sum = await import("../helper/sum").then((module) => module.sum);
            alert("Sum:: " + sum(7, 8));
          }}
        >
          Sum2
        </Button>
        <Button
          onClick={() => {
            setShowDetail((prev) => !prev);
          }}
        >
          Toggle Report Detail
        </Button>
      </div>
      <Suspense fallback={<Spin />}>{showDetail && <ReportDetail />}</Suspense>
    </div>
  );
};
