import styled from "styled-components";

export const NavContainer = styled.nav`
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-family: "Lobster Two", cursive;
  }
`;

export const ButtonCustom = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid rgb(65, 65, 65);
  transition: all 0.3s ease;
  &:hover {
    background-color: rgb(65, 65, 65);
    color: white;
  }
`;
