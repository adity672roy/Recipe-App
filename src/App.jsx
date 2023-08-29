import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Whisk And Wonder Recipes</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
