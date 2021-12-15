import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import guitarPic from '../public/guitarPlayer.svg';
import jazzPlayer from '../public/jazz2.png';

const CirclesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

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
    min-height: 100% !important;
    min-width: 100% !important;
    filter: ${(props) => (props.darkTheme ? 'none' : 'invert(1) !important')};
    z-index: 0;
  }
`;

const Circles = () => {
  const darkTheme = useSelector(({ theme }) => theme.dark);
  return (
    <CirclesContainer dark={darkTheme}>
      <Image
        className="jazz-image"
        src={jazzPlayer}
        alt="sax player"
        /* width={500}
        height={400} */
        placeholder="blur"
      />
      <div className="circle circle-one box-shadow">
        {/* <Image
          className="guitar"
          src={guitarPic}
          alt="Guitar player"
          width={500}
          height={500}
        /> */}
      </div>
      <div className="circle circle-two box-shadow"></div>
      <div className="circle circle-three glass box-shadow"></div>
    </CirclesContainer>
  );
};

export default Circles;
