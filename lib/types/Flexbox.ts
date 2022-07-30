import { getPropIfExists } from "../helpers/getPropsIfExists";
import { Size } from "./Size";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItem = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
type Direction = "inherit" | "ltr" | "rtl";

enum FlexboxKeys {
  "flex",
  "flexDirection",
  "flexWrap",
  "direction",
  "justifyContent",
  "alignItems",
  "flexShrink",
  "flexGrow",
  "flexBasis",
}

export type Flexbox = {
  flex: number;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  direction: Direction;
  justifyContent: JustifyContent;
  alignItems: AlignItem;
  flexShrink: number;
  flexGrow: number;
  flexBasis: number | Size;
};

export const getFlexboxProps = (flexProps: Partial<Flexbox>) => ({
  ...Object.keys(FlexboxKeys)
    .map((key) => getPropIfExists(flexProps[key], key))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
});
