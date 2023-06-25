import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;
  padding-top: 6rem;
  padding-bottom: 6rem;
  
  input {
    width: 100%;
    max-width: 36rem;
    margin: auto;
    margin-bottom: 2rem;
    position: fixed;
    bottom: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid #cbd5e0;
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
