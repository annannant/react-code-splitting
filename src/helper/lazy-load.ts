import { lazy } from "react";
import { delay } from "../App";

export const lazyLoad = (path: string, nameExport?: string) => {
  return lazy(() =>
    delay(1000).then(() =>
      nameExport
        ? import(`../${path}`).then((module) => ({
            default: module[nameExport],
          }))
        : import(`../${path}`)
    )
  );
};

// lazyLoad("./pages/Home", "Home");
