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

const RwdText = styled.span`
  display: ${({mobile}) => mobile ? 'none' : 'inline-block'};

  @media screen and (max-width: 1000px){
    display: ${({mobile}) => mobile ? 'inline-block' : 'none'};
  }
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
        <h1>Fry McFly</h1>
        <h4><RwdText mobile>Tap</RwdText><RwdText>Press space</RwdText> to start</h4>
      </div>
    </Wrapper>
  )
}

export default Start;
