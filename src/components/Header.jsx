import Nav from "./Nav";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <h1 id="logo">
        <a href="/">React Exam</a>
      </h1>
      <Nav />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  border-bottom: 1px solid #ddd;
  #logo {
    font-size: 3rem;
    font-weight: 700;

    a {
      display: block;
      text-decoration: none;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      color: transparent;
      &:hover {
        color: #f00861;
        -webkit-text-stroke-color: transparent;
      }
    }
  }
`;

export default Header;
