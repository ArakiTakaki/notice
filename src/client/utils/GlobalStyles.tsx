import * as React from 'react';
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export const GlobalStyles = () => (
  <Global styles={css`
    ${emotionReset}
    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
      color: #333;
    }
    html {
      font-size: 10px;
      width: 100%;
      height: 100%;
    }
    body {
      font-size: 1.6rem;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
    }
    button {
      cursor: pointer;
      outline: 0;
      background-color: transparent;
      border: 0;
      display: block;
      font-size: 100%;
    }
  `} />
);