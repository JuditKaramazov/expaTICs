import styled from "styled-components";

export const Btn = styled.button`
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    border: 2px solid ${(props) => props.theme.text};
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
