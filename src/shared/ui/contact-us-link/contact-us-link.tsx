"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { ROUTES } from "@/shared/constants/routes";
import NextLink from "next/link";

interface Props {
  className?: string;
}

export const ContactUsLink: React.FC<Props> = ({ className }) => {
  return (
    <Link href={ROUTES.CONTACT_US} className={className}>
      <Button size="middle" type="primary">
        Contact us
      </Button>
    </Link>
  );
};

const Link = styled(NextLink)`
  display: flex;
  justify-content: center;

  button {
    max-width: 170px;
    width: 100%;
  }
`;
