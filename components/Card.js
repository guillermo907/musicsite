import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to left,
    rgba(123, 43, 124, 0.4),
    var(--color-one)
  ) !important;
  background-size: 400%;
  .card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55vh;
    width: 65vw;
    //padding: 40vh;
    border-radius: 12px 170px 12px 170px;

    @media only screen and (max-width: 600px) {
      height: 45vh;
      width: 85vw;
    }
    @media only screen and (min-width: 1025px) {
      height: 45vh;
      width: 55vw;
    }

    h2 {
      margin: 1em;
    }
  }
`;

const Card = () => {
  return (
    <CardContainer className="">
      <div className="glass card-content box-shadow">
        <h2>Agenda tu evento con nosotros</h2>
      </div>
    </CardContainer>
  );
};

export default Card;
