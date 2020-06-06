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
    }
    html {
      font-size: 10px;
      background-color: #EBECF0;
    }
    body {
      font-size: 1.6rem;
    }
    img {
      display: block;
    }
    button {
      outline: 0;
      background-color: transparent;
      border: 0;
      display: block;
      font-size: 100%;
    }
  `} />
);