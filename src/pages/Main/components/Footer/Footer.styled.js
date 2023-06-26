import styled from "styled-components";

export const Section = styled.section`
  min-height: 75vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
`;

export const Container = styled.div`
  width: 75%;
  display: flex;
  margin: 2rem auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;

export const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

export const MenuItems = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;

  @media (max-width: 48em) {
    display: none;
  }
`;

export const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Bottom = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column;

    span {
      margin-bottom: 1rem;
    }
  }
`;
