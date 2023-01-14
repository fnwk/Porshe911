import { createGlobalStyle } from "styled-components";

import Cursor from "./assets/Cursor.svg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    cursor: url(${Cursor}), auto;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  canvas {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
