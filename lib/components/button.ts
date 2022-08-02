import { ComponentClass } from "react";
import { TouchableOpacityProps } from "react-native";
import { StyledComponent } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";

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

type ButtonProps = Partial<
  MarginAndPadding & ColorAndBg & Layout & Flexbox & Border & Typography
>;

export const Button: StyledComponent<
  ComponentClass<TouchableOpacityProps, any>,
  DefaultTheme,
  ButtonProps,
  never
> = styled.TouchableOpacity<ButtonProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
  ...getColorAndBgProps(props),
  ...getBorderProps(props),
  ...getTypographyProps(props),
}));
