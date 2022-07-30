import styled from "styled-components/native";

import {
  getMarginAndPaddingProps,
  MarginAndPadding,
  ColorAndBg,
  getColorAndBgProps,
  getTypographyProps,
  Typography,
} from "../types";

export type TextProps = Partial<Typography & MarginAndPadding & ColorAndBg>;

export const Text = styled.Text<TextProps>((props) => ({
  ...getTypographyProps(props),
  ...getMarginAndPaddingProps(props),
  ...getColorAndBgProps(props),
}));
