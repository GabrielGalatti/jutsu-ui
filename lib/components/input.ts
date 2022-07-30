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

export const Input = styled.TextInput<InputProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getColorAndBgProps(props),
  ...getLayoutProps(props),
  ...getFlexboxProps(props),
  ...getBorderProps(props),
  ...getTypographyProps(props),
}));
