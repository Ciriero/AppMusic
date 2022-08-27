import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 }
 * {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

//styling the scrollbar Chrome and Edge
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

body {
  margin-left: ${(props) => (props.libraryStatus ? "30%" : "")};
  
}

* {
 
  transition: 1s all ease;
 
}
 `;

export default GlobalStyle;
