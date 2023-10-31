import styled from "styled-components";

function Article() {
  return (
    <ArticleStyle>
      <div>
        <h2>타이틀</h2>
        Hello, React!
      </div>
    </ArticleStyle>
  );
}

const ArticleStyle = styled.article`
  padding: 2rem;
  width: 100%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
  color: black;
  text-align: center;
  &:hover {
    background-image: linear-gradient(180deg, #f00861 0%, #da8aa8 100%);
    color: white;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default Article;
