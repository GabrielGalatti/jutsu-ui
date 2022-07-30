import { getPropIfExists } from "../helpers/getPropsIfExists";
import { Color } from "./ColorAndBg";
import { Size } from "./Size";

enum BORDER_OPTIONS {
  borderBottomWidth = "borderBottomWidth",
  borderEndWidth = "borderEndWidth",
  borderLeftWidth = "borderLeftWidth",
  borderRightWidth = "borderRightWidth",
  borderStartWidth = "borderStartWidth",
  borderTopWidth = "borderTopWidth",
  borderWidth = "borderWidth",
  borderRadius = "borderRadius",
}

type BorderBase = {
  [key in BORDER_OPTIONS]: number;
};

type BorderAddons = {
  borderColor: Color;
  border: string;
};

export type Border = BorderBase & BorderAddons;

export const getBorderProps = (props: Partial<Border>) => ({
  ...Object.keys(BORDER_OPTIONS)
    .map((key) => getPropIfExists(props[key], key))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
});
