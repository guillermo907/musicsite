import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .team-member {
    background: transparent;
  }
`;

const Team = () => {
  return (
    <TeamContainer>
      <div className="team-member">
        <h2>Chet Baker</h2>
        <h3>Trumpet</h3>
      </div>
      <div className="team-member">
        <h2>Kenny Baron</h2>
        <h3>Piano</h3>
      </div>
      <div className="team-member">
        <h2>John Patitucci</h2>
        <h3>Bass</h3>
      </div>
      <div className="team-member">
        <h2>Art Blakey</h2>
        <h3>Drums</h3>
      </div>
    </TeamContainer>
  );
};

export default Team;
