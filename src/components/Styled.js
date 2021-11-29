import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Level = styled.div`
  position: relative;
  background: red;
  width: 800px;
`;

export const Img = styled.img`
  max-width: 100%;
  display: block;
`;

export const Point = styled.div`
  position: absolute;
  left: ${({x}) => x ? `${x}%` : 0};
  top: ${({y}) => y ? `${y}%` : 0};
  width: 128px;
  height: 64px;
  /* background-color: rgba(255,255,255, 0.1); */
  /* transform: translate(-50%, -50%); */
`;

export const Fly = styled.img`
  position: absolute;
  left: ${({x}) => x ? `${x}%` : 0};
  top: ${({y, scale}) => y ? `${y}%` : 0};
  width: 64px;
  height: 64px;
  transform: ${({scale}) => scale ? `scale(${scale})` : 'none'};
  transition: all 0.1s;
`;

export const Spider = styled.img`
  position: absolute;
  left: ${({x, scale}) => x ? `calc(${x}% + ${scale * 64}px)` : 0};
  top: ${({y}) => y ? `${y}%` : 0};
  width: 64px;
  height: 64px;
  transform: ${({scale}) => scale ? `scale(${scale})` : 'none'};
  /* transition: all 0.1s; */
`;

export const Poo = styled.img`
  position: absolute;
  left: ${({x, scale}) => x ? `calc(${x}% + ${scale * 64}px)` : 0};
  top: ${({y}) => y ? `${y}%` : 0};
  width: 64px;
  height: 64px;
  transform: ${({scale}) => scale ? `scale(${scale})` : 'none'};
`;

export const Score = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;
  font-size: 40px;
  color: #fff;
  line-height: 1;
`;

export const Timer = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  font-size: 40px;
  color: #fff;
  line-height: 1;
`;