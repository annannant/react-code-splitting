import { lazy } from "react";

export const lazyLoad = (path: string, nameExport?: string) => {
  return lazy(() =>
    nameExport
      ? import(`../${path}`).then((module) => ({ default: module[nameExport]}))
      : import(`../${path}`)
  );
};

// lazyLoad("./pages/Home", "Home");
