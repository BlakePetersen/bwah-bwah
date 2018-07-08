import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}
  
  html, body {
    background-color: #e6e9eb;
    -webkit-tap-highlight-color: transparent;
  }
  
  %font {
    font-display: auto; 
    font-style: normal;
    font-weight: 400;
  }
  
  @font-face {
    @extend %font;
    font-family: 'Abel';
    src: local('Abel Regular'), local('Abel-Regular'),
         url('/static/fonts/abel-v8-latin-regular.woff') format('woff');
  }
  
  @font-face {
    @extend %font;
    font-family: 'Anton';
    src: local('Anton Regular'), local('Anton-Regular'),
         url('/static/fonts/anton-v9-latin-regular.woff') format('woff');
  }
  
  @font-face {
    @extend %font;
    font-family: 'Hind';
    src: local('Hind Regular'), local('Hind-Regular'),
         url('/static/fonts/hind-v8-latin-regular.woff') format('woff');
  }
`;
