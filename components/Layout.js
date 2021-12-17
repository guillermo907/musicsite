import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
:root{
    --color-one: #0cacc9; //blue
    --color-two: #ca548e; //dark blue
    --color-three:#1ccbe0; //green
    --color-four: #192b3a; //dark
    --color-blue-trans: rgba(30, 144, 255, 0.55);
    --light-color: black;
    --dark-color: white;
    --light-background: RGBA(255, 255, 255, 0.85);
    --dark-background: RGBA(40, 40, 40, 0.9);
}

  body {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0px;
  background-image: url("https://as1.ftcdn.net/v2/jpg/00/99/12/20/1000_F_99122087_V0myMhFRYkp06fP0jNFHrxk0ww8weck0.jpg");
  /* background-position: top; */
  background-size: contain; 
  color: ${(props) =>
    props.dark ? 'var(--dark-color)' : 'var(--light-color)'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  }
  a{
      text-decoration: none;
      color: inherit;
  }
  h1{
      margin: 0;
  }

  #__next{
    width: 100%;
    height: 100%;
  }

  .glass {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    //background-color: rgba(255, 255, 255, 0.33);
   //border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    background-color: ${(props) =>
      props.dark ? 'var(--dark-background)' : 'var(--light-background)'};
  }

    }
  .box-shadow {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
  .bottom-space{
    margin-bottom: 30px;
  }

  .material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
`;

const Layout = ({ children }) => {
  const darkTheme = useSelector(({ theme }) => theme.dark);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <GlobalStyle dark={darkTheme} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
