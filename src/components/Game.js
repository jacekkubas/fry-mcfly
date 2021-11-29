import {useState, useEffect} from 'react';
import bg from '../assets/bg.png';
import fly from '../assets/mucha.gif';
import poo from '../assets/kupa.gif';
import spider from '../assets/spider.gif';
import {Wrapper, Level, Img, Point, Fly, Spider, Poo, Score, Timer} from './Styled';
import useSound from 'use-sound';
import coin from '../assets/sounds/coin.ogg';
import mucha from '../assets/sounds/mucha2.ogg';
import spiderOgg from '../assets/sounds/spider.ogg';

const randomNumber = (min, max, exclude) => {
  let rand = null;

  while (rand === null || rand === exclude) {
    rand = Math.floor(Math.random() * (max - min + 1) + min);
  }

  return rand;
}

const Game = ({points, setState, score, setScore}) => {
  const [pooPlace, setPooPlace] = useState(points[randomNumber(0, points.length - 1, 0)]);
  const [flyPlace, setFlyPlace] = useState(points[randomNumber(0, points.length - 1, pooPlace.index)]);
  const [spiderPlace, setSpiderPlace] = useState(points[randomNumber(0, points.length - 1, pooPlace.index)]);
  const [time, setTime] = useState(100);
  // const [isPooEaten, setIsPooEaten] = useState(false);
  const [coinSound] = useSound(coin, {volume: 0.05});
  const [muchaSound] = useSound(mucha, {interrupt: true, volume: 0.05});
  const [spiderSound] = useSound(spiderOgg, {interrupt: true, volume: 0.1});

  const handleEat = (exclude) => {
    const nextPooNumber = randomNumber(0, points.length - 1, exclude);
    const nextSpiderPlace = randomNumber(0, points.length - 1, nextPooNumber)
    
    setPooPlace(points[nextPooNumber]);
    setSpiderPlace(points[nextSpiderPlace]);

    setScore(score + 1);
    coinSound();
  }

  const handleSpiderEat = () => {
    spiderSound();
    setState('end');
  }

  const handleKeyDown = (e) => {
    const currentPlace = flyPlace.index;
    if (e.keyCode !== 39 && e.keyCode !== 37 && e.keyCode !== 32) return;
    if (e.keyCode === 39) {
      muchaSound();
      return setFlyPlace({...points[currentPlace <= 0 ? points.length - 1 : currentPlace - 1]});
    }
    if (e.keyCode === 37) {
      muchaSound();
      return setFlyPlace({...points[(currentPlace + 1) >= points.length ? 0 : currentPlace + 1]});
    }
    if (e.keyCode === 32) {
      if (currentPlace === spiderPlace.index) {
        handleSpiderEat();
        return;
      }
      if (currentPlace === pooPlace.index) {
        handleEat(pooPlace.index);
      } else {
        console.log('nothing to eat');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <Wrapper>
      <Level>
        <Timer>{time}</Timer>
        <Score>{score}</Score>
        <Img src={bg} alt ="bg" />
        {points.map(point => (
            <Point key={`point-${point.index}`} x={point.x} y={point.y} scale={point.scale} />
          )
        )}
        <Fly x={flyPlace.x} y={flyPlace.y} scale={flyPlace.scale} src={fly} />
        <Poo x={pooPlace.x} y={pooPlace.y} scale={pooPlace.scale} src={poo} />
        <Spider x={spiderPlace.x} y={spiderPlace.y} scale={spiderPlace.scale} src={spider} />
      </Level>
    </Wrapper>
  )
}

export default Game;