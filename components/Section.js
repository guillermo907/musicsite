import styled from 'styled-components';
import Link from 'next/link';

const SectionCont = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.imgLink})`};

  background-color: ${(props) => props.bgColor};
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  padding: 20px 20px;
`;

const Section = (props) => {
  return (
    <SectionCont
      bgColor={props.bgColor}
      color={props.color}
      imgLink={props.img}
      height={props.height}
      className="glass"
    >
      {props.children}
    </SectionCont>
  );
};

export default Section;
