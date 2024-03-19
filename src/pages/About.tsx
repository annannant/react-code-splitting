import { Button,  Spin } from "antd";

import { Suspense, lazy, useState } from "react";

const AboutDetail = lazy(() =>  import("../components/About/AboutDetail").then((module) => ({ default: module.AboutDetail })));

export const About = () => {
  const [showDetail, setShowDetail] = useState(false);

  const onToggleClick = async () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <div>
      <h1>About Page</h1>
      <Button onClick={onToggleClick}>Toggle About Detail</Button>
      <div>
        <Suspense fallback={<Spin />}>{showDetail && <AboutDetail />}</Suspense>
      </div>
    </div>
  );
};
