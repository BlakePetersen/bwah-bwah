import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  
  html, body {
    background-color: #e6e9eb;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyles