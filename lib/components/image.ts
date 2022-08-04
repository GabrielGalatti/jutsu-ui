import { ComponentClass } from "react";
import { StyledComponent } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";
import { ImageProps } from "react-native";
import {
  Border,
  ColorAndBg,
  Flexbox,
  getBorderProps,
  getColorAndBgProps,
  getFlexboxProps,
  getLayoutProps,
  getMarginAndPaddingProps,
  Layout,
  MarginAndPadding,
} from "../types";
import { getImageStyleProps, ImageStyleProps } from "../types/Image";

type ImageComponentStyleProps = Partial<
  MarginAndPadding & Border & Layout & ColorAndBg & ImageStyleProps & Flexbox
>;

export const Image: StyledComponent<
  ComponentClass<ImageProps, any>,
  DefaultTheme,
  ImageComponentStyleProps,
  any
> = styled.Image<ImageComponentStyleProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
  ...getColorAndBgProps(props),
  ...getBorderProps(props),
  ...getImageStyleProps(props),
}));
