import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.button`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 12px;
  padding: 12px 12px;
  border: none;
`;
const Button = (props) => {
  return (
    <ButtonCont
      className="glass drop-shadow"
      bgColor={props.bgColor}
      color={props.color}
    >
      {props.text}
    </ButtonCont>
  );
};

export default Button;
