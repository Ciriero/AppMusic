import { NavContainer, ButtonCustom } from "../styles/Nav.styled";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <NavContainer>
      <h3>Waves</h3>
      <ButtonCustom onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
      </ButtonCustom>
    </NavContainer>
  );
};

export default Nav;
