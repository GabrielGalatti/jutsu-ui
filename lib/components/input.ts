import { ComponentClass } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

import {
  MarginAndPadding,
  ColorAndBg,
  Layout,
  Flexbox,
  Border,
  getMarginAndPaddingProps,
  getColorAndBgProps,
  getBorderProps,
  getFlexboxProps,
  getLayoutProps,
  Typography,
  getTypographyProps,
} from "../types";

export type InputProps = Partial<
  MarginAndPadding & ColorAndBg & Layout & Flexbox & Typography & Border
>;

export const Input: ComponentClass<TextInputProps & InputProps> =
  styled.TextInput((props: InputProps) => ({
    ...getMarginAndPaddingProps(props),
    ...getColorAndBgProps(props),
    ...getLayoutProps(props),
    ...getFlexboxProps(props),
    ...getBorderProps(props),
    ...getTypographyProps(props),
  }));
