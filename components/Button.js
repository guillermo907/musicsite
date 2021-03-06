import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ButtonCont = styled.button`
  background: ${(props) => props.bgColor} !important;
  color: ${(props) =>
    props.dark ? 'var(--dark-color)' : 'var(--light-color)'};
  border-radius: 12px;
  padding: 12px 12px;
  border: ${(props) =>
    props.dark
      ? '1px solid rgba(209, 213, 219, 0.1)'
      : '1px solid rgba(209, 213, 219, 0.3)'} !important;
`;
const Button = (props) => {
  const darkTheme = useSelector(({ theme }) => theme.dark);

  return (
    <ButtonCont
      className="glass drop-shadow"
      bgColor={props.bgColor}
      dark={darkTheme}
    >
      {props.text}
    </ButtonCont>
  );
};

export default Button;
