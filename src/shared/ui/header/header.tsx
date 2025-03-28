"use client";
import React from "react";
import styled from "styled-components";
import { Container } from "../container";
import { ContactUsLink } from "../contact-us-link";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <Container className="container">
        <Link href={ROUTES.MAIN}>
          <div className="logo">Some Company</div>
        </Link>
        <ContactUsLink className="contact-us" />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;

  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

  box-shadow: -2px 2px 26px -1px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: -2px 2px 26px -1px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: -2px 2px 26px -1px rgba(0, 0, 0, 0.28);

  .container {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 96px;
  }

  .logo {
    font-size: 30px;
    font-weight: 800;
  }

  .contact-us {
    margin-left: auto;
    width: 170px;
  }
`;
