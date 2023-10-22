import { ComponentClass } from "react";
import { ViewProps } from "react-native";
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

export const Box: ComponentClass<ViewProps & BoxProps> = styled.View(
  (props: BoxProps) => ({
    ...getMarginAndPaddingProps(props),
    ...getFlexboxProps(props),
    ...getLayoutProps(props),
    ...getColorAndBgProps(props),
    ...getBorderProps(props),
  })
);

type FlexProps = Partial<MarginAndPadding & Layout & Flexbox>;

export const Flex: ComponentClass<ViewProps & FlexProps> = styled.View(
  (props: FlexProps) => ({
    ...getMarginAndPaddingProps(props),
    ...getFlexboxProps(props),
    ...getLayoutProps(props),
  })
);
