import React, { useContext, useState } from "react";
import { FaPencilAlt, FaTrash, FaPlus, FaMinus, FaTimes, FaSave } from "react-icons/fa"
import styled from "styled-components";
import { WikiContext } from "../../../context/WikiContext";

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
`;

const Introduction = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
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
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-left: 5rem;

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
    width: 95%;
  }
  
  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column-reverse;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;


export const FormContainer = styled.form`
  max-width: 708px;
  width: 50%;
  position: relative;
  padding: 35.5px;
  margin: 20px 0;
  justify-content: flex-end;
  flex: 1;

  button, input, select, textarea {
    color: #5A5A5A;
    font: inherit;
    margin: 0;
  }

  input {
    line-height: normal;
  }

  textarea {
    overflow: auto;
  }

  input[type='text'], select, textarea {
    background: none;
    border: none;
    border-bottom: solid 2px #474544;
    color: #474544;
    font-size: 1.000em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  input[type='text']:focus, textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    line-height: 150%;
    height: 150px;
    resize: none;
    width: 100%;
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
    background: none;
    border: solid 2px #474544;
    color: #474544;
    cursor: pointer;
    display: inline-block;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  button:hover {
    background: #474544;
    color: #F2F3EB;
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

  @media (max-width: 48em) {
    width: 100%;
  }
`;

export const ArticleBox = styled.div`
  display: flex;
  max-width: 600px;
  min-width: 200px;
  max-height: 400px;
  margin: 30px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  background: #1F2124;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  border-radius: 5px;
  margin: 30px 20px 20px 20px;
  width: calc(33.3333% - 40px);
  color: white;
  float: left;

  .articles h2.header {
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .content {
    max-width: 170px;
    margin: 30px;
    padding: 15px;
    border-radius: 4px;
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

  @media (max-width: 900px) {
    .articles{
      display: flex;
      flex-direction: column;
    }
  }
`;

const NumericPagination = styled.button`
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
`;


const Community = () => {
  const {
    articles,
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
    handleEdit,
    handleUpdate,
    handleDelete,
    editingIndex,
  } = useContext(WikiContext);
  
  const [showFullContent, setShowFullContent] = useState(false);
  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  const EditButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaPencilAlt className="icon" />
    </button>
  );
  
  const DeleteButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaTrash className="icon" />
    </button>
  );

  const ShowMoreButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaPlus className="icon" />
    </button>
  );
  
  const ShowLessButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaMinus className="icon" />
    </button>
  );

  const CancelButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaTimes className="icon" />
    </button>
  );
  
  const SaveButton = ({ onClick }) => (
    <button onClick={onClick} className="icon-button">
      <FaSave className="icon" />
    </button>
  );
  
  // Adds pagination system.
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const displayedArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Section>
      <Introduction>
        <h1>Community,</h1>
        <h2>where sharing is caring.</h2>
        <br/>
        <p>How about discussing a place or event you particularly</p>
        <p>enjoyed? Here's your Agora!</p>
      </ Introduction>
      <Container>
      <Box>
        <div className="articles-container">
          {displayedArticles.map((article, index) => (
            <ArticleBox key={index}>
            <div className="articles">
              <h2 className="header">{article.title}</h2>
              {showFullContent ? (
                <p className="content">{article.content}</p>
              ) : (
                <p className="content content-1">
                  {article.content.length > 10
                    ? article.content.substring(0, 10) + "..."
                    : article.content}
                </p>
              )}
              {editingIndex === index ? (
                  <>
                    <CancelButton onClick={() => handleEdit(-1)} />
                    <SaveButton onClick={handleUpdate} />
                  </>
                ) : (
                  <>
                    <EditButton onClick={() => handleEdit(index)} />
                    <DeleteButton onClick={() => handleDelete(index)} />
                  </>
                )}
                {showFullContent ? (
                  <ShowLessButton onClick={toggleFullContent} />
                ) : (
                  <ShowMoreButton onClick={toggleFullContent} />
                )}
              </div>
            </ ArticleBox>          
          ))}
        </div>
      </ Box>
      <Box>
        <div id="container">
          <h3>&bull; Share your knowledge &bull;</h3>
        <div className="underline"></div>
        <div className="iconWrapper">
          <svg class="icon" viewBox="0 0 145.192 145.192">
            <path d="M126.82,32.694c-2.804,0-5.08,2.273-5.08,5.075v2.721c-1.462,0-2.646,1.185-2.646,2.647v1.995    c0,1.585,1.286,2.873,2.874,2.873h20.577c1.462,0,2.646-1.185,2.646-2.647v-3.041c0-1.009-0.816-1.825-1.823-1.825v-2.722    c0-2.802-2.276-5.075-5.079-5.075h-1.985v-3.829c0-3.816-3.095-6.912-6.913-6.912h-0.589h-20.45c0-2.67-2.164-4.835-4.833-4.835    H56.843c-2.67,0-4.835,2.165-4.835,4.835H34.356v-3.384h-9.563v3.384v1.178h-7.061v1.416c-2.67,0.27-10.17,1.424-13.882,5.972    c-1.773,2.17-2.44,4.791-1.983,7.793c0.463,3.043,1.271,6.346,2.128,9.841c2.354,9.616,5.024,20.515,0.549,28.077    C2.647,79.44-3.125,90.589,2.201,99.547c4.123,6.935,13.701,10.44,28.5,10.44c1.186,0,2.405-0.023,3.658-0.068v9.028h-0.296    c-2.516,0-4.558,2.039-4.558,4.558v4.566h100.04v-4.564c0-2.519-2.039-4.558-4.558-4.558h-0.297V84.631h0.297    c2.519,0,4.558-2.037,4.558-4.556v-0.009c0-2.516-2.039-4.556-4.556-4.556l-36.786-0.009V61.973c0-2.193-1.777-3.971-3.972-3.971    v-4.711h0.456c1.629,0,2.952-1.32,2.952-2.949h14.227V34.459h1.658c2.672,0,4.834-2.165,4.834-4.834h20.45v3.069H126.82z     M34.06,75.511c-2.518,0-4.558,2.04-4.558,4.556v0.009c0,2.519,2.042,4.556,4.558,4.556h0.296v24.12l-0.042-1.168    c-15.994,0.574-26.122-2.523-30.106-9.229C-0.464,90.5,4.822,80.347,6.55,77.423c4.964-8.382,2.173-19.774-0.29-29.825    c-0.843-3.442-1.639-6.696-2.088-9.638c-0.354-2.35,0.129-4.3,1.484-5.958c3.029-3.714,9.509-4.805,12.076-5.1v1.233h7.061v1.49    v2.684c-2.403,1.114-4.153,2.997-4.676,5.237H18.15c-0.584,0-1.056,0.474-1.056,1.056v0.83c0,0.584,0.475,1.056,1.056,1.056h1.984    c0.561,2.18,2.304,3.999,4.658,5.092v0.029c0,0-2.282,20.823,16.479,22.099v1.102c0,1.177,0.955,2.133,2.133,2.133h3.297    c1.178,0,2.133-0.956,2.133-2.133V50.135c0-1.177-0.955-2.132-2.133-2.132h-3.297c-1.178,0-2.133,0.955-2.133,2.132    c-1.575-0.235-5.532-1.17-6.635-4.547c2.36-1.092,4.109-2.913,4.669-5.097h1.308c0.722,0,1.309-0.584,1.309-1.308v-0.578    c0-0.584-0.475-1.056-1.056-1.056h-1.539c-0.542-2.332-2.416-4.271-4.968-5.363v-2.559h17.651c0,2.67,2.166,4.835,4.836,4.835 h2.392v15.88h13.639c0,1.629,1.321,2.949,2.951,2.949h0.899v4.711c-2.194,0-3.972,1.778-3.972,3.971v13.529L34.06,75.511z     M95.188,101.78c0,8.655-7.012,15.665-15.664,15.665c-8.653,0-15.667-7.01-15.667-15.665c0-8.647,7.014-15.664,15.667-15.664    C88.177,86.116,95.188,93.132,95.188,101.78z M97.189,45.669h-9.556c0-0.896-0.726-1.62-1.619-1.62H74.494    c-0.896,0-1.621,0.727-1.621,1.62h-8.967v-11.21h33.283V45.669z"></path>
            <path d="M70.865,101.78c0,4.774,3.886,8.657,8.66,8.657c4.774,0,8.657-3.883,8.657-8.657c0-4.773-3.883-8.656-8.657-8.656    C74.751,93.124,70.865,97.006,70.865,101.78z"></path>
          </svg>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Article Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          {editingIndex === -1 ? (
            <button type="submit">Create Article</button>
          ) : (
            <button onClick={handleUpdate}>Update Article</button>
          )}
        </ FormContainer>
        </div>
        </ Box>
      </ Container>
      <NumericPagination
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        &lt;
      </ NumericPagination>
      {Array.from({ length: totalPages }, (_, index) => (
        <NumericPagination
          key={index}
          onClick={() => changePage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </ NumericPagination>
      ))}
      <NumericPagination
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </ NumericPagination>
    </ Section>
  );
};

export default Community;
