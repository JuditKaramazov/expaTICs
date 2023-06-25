import styled from "styled-components";

export const GoalImageContainer = styled.div`
  width: 100%;

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 64em) {
    max-width: 60vh;
  }

  @media (max-width: 48em) {
    max-width: 50vh;
  }
`;
