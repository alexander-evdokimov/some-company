"use client";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

export const Section: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <StyledSection className={className}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: 60px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
