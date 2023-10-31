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
    list-style: none;
  }
`;

export default Nav;
