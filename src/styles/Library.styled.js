import styled from "styled-components";

export const LibraryContainer = styled.div`
  position: fixed;
  cursor: pointer;
  height: 100%;
  width: 20rem;
  top: 0;
  left: 0;
  background-color: white;
  overflow: scroll;
  /* transform: translate(-100%); */
  transform: ${(props) =>
    props.libraryStatus ? "translate(0%)" : "translate(-100%)"};
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  transition: 0.7s all ease-in-out;
  h2 {
    font-family: "Lobster Two", cursive;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-right: 1rem;
  }
`;

export const LibrarySongsCont = styled.div`
  display: flex;
  background-color: ${(props) => (props.song ? "rgb(200, 165, 218)" : "")};
  padding: 1rem 1rem 2rem 1rem;
  align-items: center;
  &:hover {
    background-color: rgb(232, 165, 218);
  }
  img {
    width: 20%;
    margin-right: 1rem;
  }
`;

export const ContDescription = styled.div`
  padding: 2rem;
`;

export const Paragrap = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const InputSearch = styled.input`
  width: 90%;
  display: block;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  font-size: 1rem;
  &:focus {
    background-color: rgb(232, 232, 232);
  }
`;

export const MainApp = styled.div`
  margin-left: ${(props) => (props.libraryStatus ? "20%" : "")};
  transition: 0.7s all ease-in-out;
`;

export const FilterCust = styled.p`
  text-align: center;
  font-size: 1.5rem;
  display: block;
  height: 100%;
  width: 90%;
  overflow: hidden;
  max-block-size: 90%;
`;
