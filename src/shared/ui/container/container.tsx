"use client";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 16px;
`;
