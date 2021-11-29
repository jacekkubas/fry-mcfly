import React, {useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const Start = ({setState}) => {
  const handleKeyDown = () => {
    setState('game');
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });
  
  return (
    <Wrapper onClick={() => {setState('game')}}>
      <div>
        <h1>POO RIVALS</h1>
        <h4>Click to start</h4>
      </div>
    </Wrapper>
  )
}

export default Start;
