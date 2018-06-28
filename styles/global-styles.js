import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}
  
  html, body {
    background-color: #e6e9eb;
    -webkit-tap-highlight-color: transparent;
  }
`;
