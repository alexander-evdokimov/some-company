"use client";
import { Container, Title, Section as UiSection } from "@/shared";
import styled from "styled-components";

export const Hero = () => {
  return (
    <Section>
      <Container className="container">
        <div className="info">
          <Title>
            Most important <br /> title on the page
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam mattis, leo et
            condimentum ultricies, sem urna <br /> convallis metus, vel suscipit nibh lacus
            tincidunt ante
          </p>
        </div>
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled(UiSection)`
  background: ${(props) => `${props.theme.colors.bgPrimary}`};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: start;

    .info {
      flex: 1;
    }
  }

  .video-wrapper {
    width: 100%;
    max-width: 500px;

    .video-container {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;

      & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .container {
      text-align: center;
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 480px) {
    .info {
      br {
        display: none;
      }
    }
  }
`;
