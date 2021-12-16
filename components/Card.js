import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;
    width: 65vh;
    //padding: 40vh;
    border-radius: 12px 170px 12px 170px;
    //background-color: rgba(30, 144, 255, 0.87);
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
