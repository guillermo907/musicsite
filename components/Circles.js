import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import guitarPic from '../public/guitarPlayer.svg';
import jazzPlayer from '../public/jazz2.png';
import jazzband from '../public/jazzband.png';

const CirclesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;

  .circle {
    border-radius: 50%;
    display: inline-block;
    border: none;
    z-index: -1;
  }

  .circle-one {
    width: 40vh;
    height: 40vh;
    position: absolute;
    background-color: var(--color-one);
    top: 10px;
    right: 10px;
    z-index: -1;
  }
  .circle-two {
    width: 20vh;
    height: 20vh;
    position: absolute;
    background-color: var(--color-two);
    right: 300px;
    top: 215px;
    z-index: -1;
  }
  .circle-three {
    width: 15vh;
    height: 15vh;
    position: absolute;
    top: 320px;
    right: 220px;
    z-index: -1;
  }
  .guitar {
    position: absolute;
    top: 300px;
    right: 50px;
    z-index: -1;
  }
  .jazz-image {
    height: 100% !important;
    width: 100% !important;
    /* filter: ${(props) => (props.dark ? 'none' : 'invert(1) !important')}; */
    z-index: 0;
    margin: 0px 0px !important;
    justify-self: flex-end;
  }
  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: 
    max-width: 90%;
    padding: 1rem;
    /* color: ${(props) =>
      props.dark ? 'var(--dark-color)' : 'var(dark-color)'}; */
    color: rgba(255, 255, 255, 0.8);

    /* position: absolute;
    bottom: 2rem; */
    /* right: 5rem; */
    h1.title {
      font-size: 4rem;
    }
    p {
      max-width: fit-content;
      padding: 0;
      margin: 0;
    }
  }
`;

const Circles = () => {
  const darkTheme = useSelector(({ theme }) => theme.dark);
  return (
    <CirclesContainer dark={darkTheme}>
      {/* <Image
        className="jazz-image"
        src={jazzband}
        alt="sax player"
        width={500}
        height={400}
        placeholder="blur"
      /> */}
      <div className="text-section appear">
        <h1 className="title">Jazz tic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          provident aspernatur placeat. Aut, voluptatem explicabo dolorum
          exercitationem.
        </p>
      </div>

      {/* <div className="circle circle-one box-shadow"></div>
      <div className="circle circle-two box-shadow"></div>
      <div className="circle circle-three glass box-shadow"></div> */}
    </CirclesContainer>
  );
};

export default Circles;
