import styled from 'styled-components';

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
