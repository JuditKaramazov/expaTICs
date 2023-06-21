import styled from "styled-components";

export const Up = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  margin: 0;
  right: 1rem;
  bottom: 1rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;
