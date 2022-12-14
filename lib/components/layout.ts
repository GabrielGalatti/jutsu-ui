import { ComponentClass } from "react";
import { View, ViewProps } from "react-native";
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
} from "../types";

type BoxProps = Partial<
  MarginAndPadding & ColorAndBg & Layout & Flexbox & Border
>;

export const Box: StyledComponent<
  ComponentClass<ViewProps, any>,
  DefaultTheme,
  BoxProps,
  never
> = styled.View<BoxProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
  ...getColorAndBgProps(props),
  ...getBorderProps(props),
}));

type FlexProps = Partial<MarginAndPadding & Layout & Flexbox>;

export const Flex: StyledComponent<
  ComponentClass<ViewProps, any>,
  DefaultTheme,
  FlexProps,
  never
> = styled.View<FlexProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
}));
