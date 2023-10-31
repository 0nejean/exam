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
  border: 1px solid #ddd;
  box-sizing: border-box;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default Article;
