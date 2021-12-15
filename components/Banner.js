import styled from 'styled-components';
import Link from 'next/link';

const BannerCont = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
  background-image: ${(props) => `url(${props.imgLink})`};

  /* background-color: ${(props) => props.bgColor}; */
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // color: ${(props) => props.color};
  padding: 20px 20px;

  .banner-card {
    background-color: ${(props) => props.cardColor};
    width: 90%;
    height: 60%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .banner-card {
      width: 100%;
    }
  }
`;

const Banner = (props) => {
  return (
    <BannerCont
      bgColor={props.bgColor}
      cardColor={props.cardColor}
      color={props.color}
      imgLink={props.img}
      className="glass bottom-space"
    >
      <div className="banner-card box-shadow">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <Link href="/about">Go</Link>
      </div>
    </BannerCont>
  );
};

export default Banner;
