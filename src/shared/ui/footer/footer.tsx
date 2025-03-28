"use client";
import React from "react";
import styled from "styled-components";
import { Container } from "../container";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter className={className}>
      <Container className="container">
        <div>Some Company {currentYear}</div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: auto;

  .container {
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }
`;
