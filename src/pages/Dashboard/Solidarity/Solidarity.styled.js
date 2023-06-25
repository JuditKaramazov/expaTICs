import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

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
