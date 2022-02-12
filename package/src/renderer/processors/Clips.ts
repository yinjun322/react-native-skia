import type { ICanvas, ClipOp } from "../../skia/Canvas";
import type { IRect, IRRect } from "../../skia";

import type { PathDef } from "./Paths";
import { processPath, isPathDef } from "./Paths";
import { isRRect } from "./Rects";

export type ClipDef = IRRect | IRect | PathDef;

export const processClip = (canvas: ICanvas, def: ClipDef, op: ClipOp) => {
  console.log({ def });

  if (isPathDef(def)) {
    const path = processPath(def);
    canvas.clipPath(path, op, true);
  } else if (isRRect(def)) {
    canvas.clipRRect(def, op, true);
  } else {
    canvas.clipRect(def, op, true);
  }
};
