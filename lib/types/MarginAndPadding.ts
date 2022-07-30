import { Size } from "./Size";

enum MARGIN_AND_PADDING_OPTIONS {
  margin = "margin",
  marginTop = "marginTop",
  marginRight = "marginRight",
  marginBottom = "marginBottom",
  marginLeft = "marginLeft",
  marginX = "marginX",
  marginY = "marginY",
  paddingTop = "paddingTop",
  paddingRight = "paddingRight",
  paddingBottom = "paddingBottom",
  paddingLeft = "paddingLeft",
  paddingX = "paddingX",
  paddingY = "paddingY",
  m = "m",
  mt = "mt",
  mr = "mr",
  mb = "mb",
  ml = "ml",
  mx = "mx",
  my = "my",
  p = "p",
  pt = "pt",
  pr = "pr",
  pb = "pb",
  pl = "pl",
  px = "px",
  py = "py",
}

type MarginAndPaddingBase = {
  [key in MARGIN_AND_PADDING_OPTIONS]: Size;
};

type MarginAndPaddingAddons = {
  padding: string | number;
};

export type MarginAndPadding = MarginAndPaddingBase & MarginAndPaddingAddons;

const getMarginProps = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
}: Partial<MarginAndPadding>) => ({
  // margin: margin || m || 0,
  marginTop: marginTop || mt || marginY || my || 0,
  marginBottom: marginBottom || mb || marginY || my || 0,
  marginLeft: marginLeft || ml || marginX || mx || 0,
  marginRight: marginRight || mr || marginX || mx || 0,
});

const getPaddingProps = ({
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
}: Partial<MarginAndPadding>) => ({
  // padding: padding || p || "inherit",
  paddingTop: paddingTop || pt || paddingY || py || 0,
  paddingBottom: paddingBottom || pb || paddingY || py || 0,
  paddingLeft: paddingLeft || pl || paddingX || px || 0,
  paddingRight: paddingRight || pr || paddingX || px || 0,
});

export const getMarginAndPaddingProps = (props: Partial<MarginAndPadding>) => ({
  ...getMarginProps(props),
  ...getPaddingProps(props),
});
