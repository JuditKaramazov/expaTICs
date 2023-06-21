import styled from "styled-components";
import Arrow from "@/public/Arrow.svg"

export const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    width: 4rem;
    top: 60%;
    right: 0;
    color: ${(props) => props.theme.text};
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-prev {
    width: 4rem;
    top: 60%;
    left: 0;
    color: ${(props) => props.theme.text};
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

export const SubText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
`;
