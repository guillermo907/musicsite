import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import guitarPic from '../public/guitarPlayer.svg';
import chet from '../public/chet1.jpeg';
import kenny from '../public/kenny.jpeg';
import john from '../public/john.jpeg';
import art from '../public/art.jpeg';

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    margin: 1rem 0rem;

    img {
      object-fit: cover;
      border-radius: 50%;
    }
    h2 {
      margin: 1rem 0px 0px 0px;
    }
    h3 {
      margin: 0;
    }
  }
`;

const Team = () => {
  return (
    <TeamContainer>
      <div className="team-member">
        <Image
          className="jazz-image"
          src={chet}
          alt="sax player"
          width={200}
          height={200}
          /* placeholder="blur" */
        />
        <h2>Chet Baker</h2>
        <h3>Trumpet</h3>
      </div>
      <div className="team-member">
        <Image
          className="jazz-image"
          src={kenny}
          alt="sax player"
          width={200}
          height={200}
          /* placeholder="blur" */
        />
        <h2>Kenny Baron</h2>
        <h3>Piano</h3>
      </div>
      <div className="team-member">
        <Image
          className="jazz-image"
          src={john}
          alt="sax player"
          width={200}
          height={200}
          /* placeholder="blur" */
        />
        <h2>John Patitucci</h2>
        <h3>Bass</h3>
      </div>
      <div className="team-member">
        <Image
          className="jazz-image"
          src={art}
          alt="sax player"
          width={200}
          height={200}
          /* placeholder="blur" */
        />
        <h2>Art Blakey</h2>
        <h3>Drums</h3>
      </div>
    </TeamContainer>
  );
};

export default Team;
