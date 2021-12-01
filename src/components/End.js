import React, {useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-size: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;

  h1 {
    line-height: 1.2;

    @media screen and (max-width: 767px) {
      font-size: 30px;
    }
  }

  h4 {
    line-height: 1.2;

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }
`;

const End = ({setState, score, setScore}) => {
  const handleKeyDown = () => {
    setScore(0);
    setState('start');
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <Wrapper onClick={handleKeyDown}>
      <div>
        <h1>GAME OVER</h1>
        <h4>Score: {score}</h4>
      </div>
    </Wrapper>
  )
}

export default End;
