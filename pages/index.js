// Logic Deps
import initReactFastClick from 'react-fastclick';
initReactFastClick();

import { Bwah } from '../lib/bwah'

// Template Deps
import Head from '../components/head'
import Page from '../components/page'

// Style Deps
import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

// Styles
const _pushColor = 'hsla(10, 90%, 40%, 1)';
const _pushSize = 200;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
`;

const Title = styled.h1`
  transform: scale(.8);
  position: relative;
  margin: 0;
  font-family: 'Anton', sans-serif;
  font-size: 5rem;
  font-weight: 400;
  line-height: 1;
  
  &:after {
    content: '!!';
    font-size: 10.75rem;
    top: -.25rem;
    display: inline;
    line-height: 0;
  }
  
  @media (max-width: 800px) {
    font-size: calc(5rem *.8);
    
    &:after {
      font-size: calc(10.75rem *.8);
      top: calc(-.25rem * .8);
    }
  }
`;

const Description = styled.h2`
  margin-top: 0;
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: 'Abel', cursive;
  @media (max-width: 800px) {
    font-size: calc(1.25rem *.8);
  }
`;

const Button = styled.button`    
      touch-action: none;
      position: relative;
      display: inline-block;
      min-width: ${_pushSize}px;
      min-height: ${_pushSize}px;
      border: 0;
      margin: 1rem 1rem 5rem;
      outline: none;
      background-color: ${_pushColor};
      border-radius: 50%;
      cursor: pointer;
      transition: box-shadow 200ms;
      box-shadow:
        inset 0 ${_pushSize / 32}px 0 ${lighten(.05, _pushColor)},
        inset 0 -${_pushSize / 32}px 0 ${darken(.05, _pushColor)},
        inset 0 0 0 ${_pushSize / 32}px ${darken(.03, _pushColor)},
        inset 0 0 0 ${_pushSize / 12}px ${_pushColor},
        inset 0 0 0 ${_pushSize / 10}px ${darken(.2, _pushColor)},
        inset 0 0 0 ${_pushSize / 9.2}px ${darken(.5, _pushColor)},
        inset 0 0 0 ${_pushSize / 7.5}px ${transparentize(.3, lighten(.3, _pushColor))},
        inset 0 0 0 ${_pushSize / 5.5}px ${_pushColor},
        inset 0 ${_pushSize / 2.5}px ${_pushSize / 7.5}px ${darken(.05, _pushColor)},
        inset 0 0 ${_pushSize / 10}px ${_pushSize / 6}px ${darken(.1, _pushColor)},
        0 ${_pushSize / 30}px 0 rgba(0, 0, 0, .15);

      &:after {
        content: '';
        position: absolute;
        bottom: ${_pushSize}/20;
        left: ${_pushSize}/10;
        display: block;
        width: ${_pushSize}/1.25;
        height: ${_pushSize}/1.25;
        border: ${_pushSize}/15 solid rgba(0, 0, 0, .3);
        border-width: 0 0 ${_pushSize}/15;
        border-radius: 50%;
        transition-duration: 200ms;
      }

      &:active,
      &.is-pushed {
        box-shadow:
          inset 0 ${_pushSize / 32}px 0 ${lighten(.05, _pushColor)},
          inset 0 -${_pushSize / 32}px 0 ${darken(.05, _pushColor)},
          inset 0 0 0 ${_pushSize / 32}px ${darken(.03, _pushColor)},
          inset 0 0 0 ${_pushSize / 12}px ${_pushColor},
          inset 0 0 0 ${_pushSize / 10}px ${darken(.2, _pushColor)},
          inset 0 0 0 ${_pushSize / 8.5}px ${darken(.4, _pushColor)},
          inset 0 0 0 ${_pushSize / 7.5}px ${transparentize(.8, lighten(.3, _pushColor))},
          inset 0 0 0 ${_pushSize / 5.5}px ${darken(.03, _pushColor)},
          inset 0 ${_pushSize / 2.5}px ${_pushSize / 7.5}px ${darken(.08, _pushColor)},
          inset 0 0 ${_pushSize / 10}px ${_pushSize / 6}px ${darken(.15, _pushColor)},
          0 ${_pushSize / 30}px 0 rgba(0, 0, 0, .15);
        
        background-color: ${darken(.02, _pushColor)};
  
        &:after {
          bottom: ${_pushSize}/20 + ${_pushSize}/15;
          border-width: 0;
        }
      }
    }
`;

const By = styled.div`
  position: absolute;
  align-self: center;
  top: calc(100vh - 50px);
  text-align: center;
  color: #ccc;
  font-size: .7rem;
  line-height: 1.45;
  
  opacity: .5;
  transition: opacity 200ms ease-out;
  
  &:hover {
    opacity: 1;
  }
  
  a {
    display: block;
    text-decoration: none;
    text-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
    transition: text-shadow 200ms ease-out, transform 200ms ease-out;
    font-size: 1rem;
    color: #ababab;

    &:hover { 
      transform: translateY(-4px);
      text-shadow: 0 12px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

export default () => (
  <Page>
    <Head title="BWAH BWAH!!" />
    <Container>
      <Hero>
        <Title>BWAH<br />BWAH</Title>
        <Description>Use when 🔥 breaks out</Description>
        <Button onTouchTap={ Bwah } onClick={ Bwah } />
      </Hero>

      <By>&lt;/&gt; by <a href={'https://twitter.com/Blake_Petersen'}>ʙ ʟ ▲ ĸ ᴇ</a></By>
    </Container>
  </Page>
)
