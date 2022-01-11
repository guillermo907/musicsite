import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Videobanner from '../components/Videobanner';
import Circles from '../components/Circles';
import Card from '../components/Card';
import Tourdates from '../components/Tourdates';
import Section from '../components/Section';
import Team from '../components/Team';

const Main = styled.main`
  display: flex;
  //background-color: var(--color-one);
  //background-color: var(--color-blue-trans);
  //filter: opacity(0.9);
  align-items: center;
  justify-content: center;
  min-height: 91vh;
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  .main-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    //border-radius: 12px;
   /*  border-radius: 150px 290px 320px 0px;
    background-color: var(--dark-color);
    opacity: 0.9; */
}
  }

  h1,
  p {
    /* transform: scale(1.4);
    z-index: 1; */
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="theme-color" content="#2E4053" />
      </Head>
      <Main>
        {/* <Videobanner height="91vh">
          <div className="glass main-banner">
            <h1>JazzTic</h1>
            <p>Lorem ipsum dolor sit.</p>
            <Circles />
          </div>
        </Videobanner> */}
        <div className=" main-banner">
          <Circles />
        </div>
      </Main>
      {/* Seccion con imagenes */}
      <Section height="80vh">
        <Team />
      </Section>
      <Videobanner height="75vh">
        <Card />
      </Videobanner>
      <Tourdates /* bgColor="var(--color-blue-trans)" */ />
    </div>
  );
}
