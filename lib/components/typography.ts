import styled, { DefaultTheme } from "styled-components/native";
import { StyledComponent } from "styled-components";
import { TextProps as ReactNativeTextProps } from "react-native";

import {
  getMarginAndPaddingProps,
  MarginAndPadding,
  ColorAndBg,
  getColorAndBgProps,
  getTypographyProps,
  Typography,
} from "../types";
import { ComponentClass } from "react";

export type TextProps = Partial<Typography & MarginAndPadding & ColorAndBg>;

export const Text: StyledComponent<
  ComponentClass<ReactNativeTextProps, any>,
  DefaultTheme,
  TextProps,
  never
> = styled.Text<TextProps>((props) => ({
  ...getTypographyProps(props),
  ...getMarginAndPaddingProps(props),
  ...getColorAndBgProps(props),
}));
