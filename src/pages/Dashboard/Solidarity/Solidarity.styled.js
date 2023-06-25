import styled from "styled-components";

export const Section = styled.section`
  min-height: calc(100vh - ${(props) => props.theme.navHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 5rem;
  margin-right: 1rem;
  position: relative;
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
    width: 95%;
    margin: 0 30px 0 30px;
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

  @media (max-width: 30em) {
    width: 90%;
    margin-left: 50px;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin-bottom: 10rem;

  .AddIdeaForm {
    display: flex;
    flex-wrap: wrap;
  }

  .AddIdeaForm input {
    padding: 1.5rem;
    border: 2px solid grey;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));

    &:hover {
      border: 2px solid pink;
    }
  }
  
  .AddIdeaForm input[type='text'] {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .AddIdeaForm input[type='submit'] {
    background: transparent;
    border: 2px solid pink;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    padding: 0;
    margin: 0;
  }

  .ideas {
    list-style-type: none;
  }
  
  .Idea {
    display: flex;
    min-width: 40px;
    max-width: 220px;
    min-height: 40px;
    margin: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: rgba(74, 190, 243, 0.37);
    padding: 1rem;
    border-radius: 30px;
    text-align: center;
  }

  .Idea:before,
  .Idea:after {
    content: "";
    display: block;
    background-color: rgba(74, 190, 243, 0.37);
    border-radius: 50%;
    position: absolute;
    z-index: -1;
  }

  .Idea:before {
    width: 44px;
    height: 44px;
    top: -12px;
    left: 28px;
    box-shadow: -50px 30px 0 -12px rgba(74, 190, 243, 0.37);
  }

  .Idea:after {
    width: 30px;
    height: 30px;
    bottom: -10px;
    right: 26px;
    box-shadow: 40px -34px 0 0 rgba(74, 190, 243, 0.37),
               -28px -6px 0 -2px rgba(74, 190, 243, 0.37),
               -24px 17px 0 -6px rgba(74, 190, 243, 0.37),
               -5px 25px 0 -10px rgba(74, 190, 243, 0.37);
  }
  
  .Idea .remove-button {
    margin-right: 10px;
    float: right;
    font-size: 90%;
    background: transparent;
    border: 20px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .Idea .remove-button:hover {
    color: fuchsia;
    background-color: transparent;
  }
`;
