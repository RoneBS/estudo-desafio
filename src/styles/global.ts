import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  
  body: {
    background: '#000',
    fontFamily: 'Helvetica, sans-serif',
    'webkit-font-smoothing': 'antialiased',
  }
})