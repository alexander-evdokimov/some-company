"use client";
import { ContactUsLink, Container, Title, Section as UiSection } from "@/shared";
import styled from "styled-components";

export const Less = () => {
  return (
    <Section>
      <Container>
        <Title className="title" level={2}>
          Less important title
        </Title>
        <ContactUsLink />
      </Container>
    </Section>
  );
};

const Section = styled(UiSection)`
  background: ${(props) => `${props.theme.colors.bgPrimary}`};

  .title {
    text-align: center;
  }
`;
