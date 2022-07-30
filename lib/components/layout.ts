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
} from "../types";

type BoxProps = Partial<
  MarginAndPadding & ColorAndBg & Layout & Flexbox & Border
>;

export const Box = styled.View<BoxProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
  ...getColorAndBgProps(props),
  ...getBorderProps(props),
}));

type FlexProps = Partial<MarginAndPadding & Layout & Flexbox>;

export const Flex = styled.View<FlexProps>((props) => ({
  ...getMarginAndPaddingProps(props),
  ...getFlexboxProps(props),
  ...getLayoutProps(props),
}));
