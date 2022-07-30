import { getPropIfExists } from "../helpers/getPropsIfExists";
import { Size } from "./Size";

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
enum TYPOGRAPHY_OPTIONS { "fontFamily", "fontSize", "fontStyle", "fontWeight", "textAlign" };

export type Typography = {
    fontFamily: string;
    fontSize: Size;
    fontStyle: "normal" | "italic";
    fontWeight: FontWeight;
    textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const getTypographyProps = (props: Partial<Typography>) => ({
    ...Object.keys(TYPOGRAPHY_OPTIONS)
        .map(key => getPropIfExists(props[key], key))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {})
})