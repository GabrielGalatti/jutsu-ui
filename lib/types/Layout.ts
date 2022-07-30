import { getPropIfExists } from "../helpers/getPropsIfExists";
import { Size } from "./Size";

enum LAYOUT_OPTIONS {
  width = "width",
  height = "height",
  minWidth = "minWidth",
  maxWidth = "maxWidth",
  minHeight = "minHeight",
  maxHeight = "maxHeight",
  w = "w",
  h = "h",
  minW = "minW",
  maxW = "maxW",
  minH = "minH",
  maxH = "maxH",
  top = "top",
  bottom = "bottom",
  right = "right",
  left = "left",
}

type Position = "relative" | "absolute";

type LayoutBase = {
  [key in LAYOUT_OPTIONS]: Size;
};

type LayoutAddons = {
  display: "flex" | "none";
  overflow: "visible" | "hidden" | "scroll";
  position: Position;
  pos: Position;
  zIndex: number;
};

export type Layout = LayoutBase & LayoutAddons;

export const getLayoutProps = ({
  display,
  height,
  h,
  maxHeight,
  maxH,
  maxWidth,
  maxW,
  minHeight,
  minH,
  minWidth,
  minW,
  width,
  w,
  pos,
  position,
  overflow,
  ...props
}: Partial<Layout>) => ({
  display: display || "flex",
  height: height || h || "auto",
  width: width || w || "auto",
  maxWidth: maxWidth || maxW || "100%",
  minHeight: minHeight || minH || "0px",
  maxHeight: maxHeight || maxH || "100%",
  minWidth: minWidth || minW || "0px",
  position: position || pos || "relative",
  overflow: overflow || "visible",
  ...["top", "bottom", "left", "right", "zIndex"]
    .map((key) => getPropIfExists(props[key], key))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
});
