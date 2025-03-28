"use client";
import { ContactUsLink, Container as UiContainer, Section, Title } from "@/shared";
import styled from "styled-components";

export const Also = () => {
  return (
    <Section>
      <Container>
        <Title className="title" level={1}>
          Also very important title
        </Title>
        <ul>
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <Title level={3}>Title</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
                condimentum
              </p>
            </li>
          ))}
        </ul>
        <ContactUsLink className="contact-link" />
      </Container>
    </Section>
  );
};

const Container = styled(UiContainer)`
  .title {
    margin-bottom: 80px;
    text-align: center;
  }

  .contact-link {
    margin-top: 60px;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 100px 40px;

    li {
      width: 300px;
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    & ul {
      gap: 40px 20px;
    }
    .title {
      margin-bottom: 40px;
    }

    .contact-link {
      margin-top: 30px;
    }
  }
`;
