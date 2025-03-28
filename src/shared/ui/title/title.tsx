"use client";
import { FC } from "react";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import styled from "styled-components";

const { Title: AntTitle } = Typography;

const fontSizeMap: Record<number, string> = {
  1: "36px",
  2: "36px",
  3: "24px",
  4: "",
  5: "",
};

export const Title: FC<TitleProps> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled(AntTitle)`
  @media screen and (max-width: 768px) {
    font-size: ${({ level }) => fontSizeMap[level ?? 1]} !important;
  }
`;
