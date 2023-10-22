import styled, { DefaultTheme } from "styled-components/native";
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

export const Text: ComponentClass<ReactNativeTextProps & TextProps> =
  styled.Text((props: TextProps) => ({
    ...getTypographyProps(props),
    ...getMarginAndPaddingProps(props),
    ...getColorAndBgProps(props),
  }));
