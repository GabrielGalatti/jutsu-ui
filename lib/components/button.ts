import { ComponentClass } from "react";
import { TouchableOpacityProps } from "react-native";
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

type ButtonProps = Partial<
  MarginAndPadding & ColorAndBg & Layout & Flexbox & Border & Typography
>;

export const Button: ComponentClass<TouchableOpacityProps & ButtonProps> =
  styled.TouchableOpacity((props: ButtonProps) => ({
    ...getMarginAndPaddingProps(props),
    ...getFlexboxProps(props),
    ...getLayoutProps(props),
    ...getColorAndBgProps(props),
    ...getBorderProps(props),
    ...getTypographyProps(props),
  }));
