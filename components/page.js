import Router from 'next/router'

import { pageview } from '../lib/gtag'
import styled from 'styled-components';

Router.onRouteChangeComplete = url => {
  pageview(url)
};

const Body = styled.div`
  font-family: 'Hind', sans-serif;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const Page = ({ children }) => (
    <Body>
      { children }
    </Body>
);

export default Page
