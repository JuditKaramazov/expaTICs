import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 95%;
  margin-left: 5rem;
  margin-bottom: 2rem;
  position: sticky;
  animation: smoothStart 2s ease-in;

  @keyframes smoothStart {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
  }

  @media (max-width: 30em) {
    width: 100%;
    margin: 0 30px 0 70px;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const Introduction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  h2 {
    display: inline-block;
    margin-left: 6px;
    margin-bottom: 4px;
    position: relative;
  }

  h2::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #010101;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  h2:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  p {
    margin-left: 6px;
  }

  @media (max-width: 78em) {
    display: none;
  }
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-left: 5rem;
  margin-right: 1.1rem;

  #container {
    border: solid 4px #474544;
    background: #fdfbe8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin: 1rem;
    color: #474544;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 7px;
    text-align: center;
    text-transform: uppercase;
  }
  
  .underline {
    border-bottom: solid 2px #474544;
    margin: 1em auto;
    width: 80px;
  }
  
  .iconWrapper {
    margin: 50px auto 0;
    width: 50%;
  }
  
  .icon {
    display: block;
    fill: #474544;
    height: 50px;
    margin: 0 auto;
    width: 50px;
  }

  @media (max-width: 64em) {
    position: sticky;
    margin-left: 1rem;
  }

  @media (max-width: 48em) {
    position: absolute;
    flex-direction: column;
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  max-width: 708px;
  width: 50%;
  margin: 20px 0;
  position: relative;
  padding: 35.5px;
  justify-content: flex-end;
  flex: 1;

  button, input, select, textarea {
    margin: 0;
    color: #5A5A5A;
    font: inherit;
  }

  input {
    line-height: normal;
  }

  textarea {
    overflow: auto;
  }

  input[type='text'], select, textarea {
    width: 100%;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    background: none;
    border: none;
    border-bottom: solid 2px #474544;
    color: #474544;
    font-size: 1.000em;
    font-weight: 400;
    letter-spacing: 1px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
  }

  input[type='text']:focus, textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    line-height: 150%;
  }

  ::-webkit-input-placeholder {
    color: #474544;
  }

  :-moz-placeholder { 
    color: #474544;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #474544;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #474544;
  }

  button {
    display: inline-block;
    background: none;
    border: solid 2px #474544;
    color: #474544;
    cursor: pointer;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
  }

  button:hover {
    background: #474544;
    color: #F2F3EB;
  }

  @media (max-width: 64em) {
    width: 100%;
  }

  @media (max-width: 48em) {
    position: sticky;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;

  .articles-container {
    max-width: 800px;
    margin-left: -5%;
  }

  @media (max-width: 64em) {
    width: 80%;
    display: inline-block;
    margin: 3rem 2rem 0 1rem;
    float: left;
  }

  @media (max-width: 48em) {
    width: 87%;
    margin-bottom: 20px;
  }
`;

export const ArticleBox = styled.div`
  display: flex;
  width: calc(33.3333% - 40px);
  max-width: 600px;
  min-width: 200px;
  max-height: 400px;
  margin: 30px 20px 20px 20px;
  justify-content: center;
  text-align: center;
  background: #1F2124;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  border-radius: 5px;
  color: white;
  float: left;
  padding: 20px;

  .articles h2.header {
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .content {
    max-width: 170px;
    margin: 30px;
    border-radius: 4px;
    padding: 15px;
    transition: all .3s ease;
  }

  .content:hover {
    overflow: visible;
    white-space: normal;
  }

  .content content-1 {
    margin: 0 auto;
    border-radius: 4px;
    transition: all .3s ease;
  }

  .content-1:hover{
    color: black;
    border: 1px solid salmon;
    background: #fdfbe8;
  }

  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    margin: 7px;
    fill: white;

    &:hover {
      fill: salmon;
    }
  }

  @media (max-width: 70em) {
    max-height: 20vh;
    width: 90%;
  }

  @media (max-width: 64em) {
    width: 100%;
    max-height: 200px;
    margin: 20px; 
    float: none; 
  }

  @media (max-width: 32em) {
    margin: 5px 0;
  }
`;

export const NumericPagination = styled.button`
  margin: 30px;
  color: black;
  cursor: pointer;
  background: transparent;
  border: none; 
  padding: 5px;

  &:hover {
    font-weight: bold;
  }

  &:disabled {
    color: grey;
    cursor: default;
    font-weight: normal;
  }

  @media (max-width: 64em) {
    position: sticky;
    margin-left: 8.5rem;
  }

  @media (max-width: 48em) {
    margin-left: 5rem;
  }

  @media (max-width: 32em) {
    margin-left: 2rem;
  }
`;
