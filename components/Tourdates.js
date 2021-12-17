import styled from 'styled-components';
import Link from 'next/link';
import Circles from './Circles';

const TourdatesCont = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 80vh;
  background-image: ${(props) => `url(${props.imgLink})`};
  z-index: 10;

  background-color: ${(props) => props.bgColor};
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // color: ${(props) => props.color};
  padding: 20px 20px;

  .banner-content {
    background-color: ${(props) => props.cardColor};
    width: 90%;
    height: 60%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tourdate {
    display: flex;
    margin: 1em;

    p {
      margin: 20px;
      border-bottom: 1px solid;
    }

    button {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      border: none;
      margin-left: 3em;
      padding: 22px 10px;
      color: inherit;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .banner-card {
      width: 100%;
    }
  }
`;

const tourdates = [
  {
    place: 'Guadalaraja, jal',
    date: '4 de enero 2022 08:45pm'
  },
  {
    place: 'Zapotlanejo, jal',
    date: '7 de enero 2022 08:00pm'
  },
  {
    place: 'Atenquique, jal',
    date: '8 de enero 2022 05:30pm'
  },
  {
    place: 'Sayula, jal',
    date: '10 de enero 2022 07:30pm'
  },
  {
    place: 'Zapotitltic, jal',
    date: '11 de enero 2022 09:30pm'
  }
];

const Tourdates = (props) => {
  const renderTourDates = () => {
    return tourdates.map((tourdate) => {
      return (
        <div className="tourdate" key={tourdate.date}>
          <p>{tourdate.place}</p>
          <p>{tourdate.date}</p>
          <button>Reservar</button>
        </div>
      );
    });
  };

  return (
    <TourdatesCont
      bgColor={props.bgColor}
      cardColor={props.cardColor}
      color={props.color}
      imgLink={props.img}
      className=""
    >
      <h1>Upcoming tour dates</h1>
      <br />
      <div className="banner-content box-shadow glass">
        {renderTourDates()}
        ...
      </div>
    </TourdatesCont>
  );
};

export default Tourdates;