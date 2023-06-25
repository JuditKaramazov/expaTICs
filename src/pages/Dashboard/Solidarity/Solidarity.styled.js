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
    border: 1px solid #666;
    border-radius: 4px;
  }
  
  .AddIdea input[type='text'] {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .ideas {
    list-style-type: none;
    padding: 0;
  }
  
  .Idea {
    margin-bottom: 1rem;
    background-color: #eee;
    border-radius: 3px;
    padding: 1rem;
  }
  
  .Idea .remove-button {
    background: transparent;
    border: 0;
    border-radius: 3px;
    float: right;
    font-size: 80%;
  }
  
  .Idea .remove-button:hover {
    color: #fff;
    background-color: #000;
  }

`;
