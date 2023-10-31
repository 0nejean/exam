import styled from "styled-components";
import { Reset } from "styled-reset";

function Nav() {
  return (
    <NavStyle>
      <Reset />
      <ul>
        <li>
          <a href="/sub/html">html</a>
        </li>
        <li>
          <a href="/sub/css">css</a>
        </li>
        <li>
          <a href="/sub/js">js</a>
        </li>
      </ul>
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  ul {
    display: flex;
    > li {
      &::before {
      }
      &::after {
      }
    }
  }
  a {
    display: block;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 2rem;

    text-decoration: none;
    color: black;
    &:hover {
      color: #da8aa8;
    }
  }
`;

export default Nav;
