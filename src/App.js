import {useState} from 'react';
import Game from './components/Game'
import Start from './components/Start'
import End from './components/End'

const App = () => {
  const [state, setState] = useState('start');
  const [score, setScore] = useState(0);

  const points = [
    {
      x: 35,
      y: 87,
      scale: 1,
      index: 0,
    },
    {
      x: 8,
      y: 53,
      scale: 0.6,
      index: 1,
    },
    {
      x: 50,
      y: 18,
      scale: 0.4,
      index: 2,
    },
    {
      x: 77,
      y: 65,
      scale: 0.8,
      index: 3,
    }
  ]

  return (
    <div className="App">
      <div style={{width: '100%', height: '100%'}}>
        {state === 'start' && <Start setState={setState} />}
        {state === 'game' && <Game setState={setState} points={points} score={score} setScore={setScore} />}
        {state === 'end' && <End setState={setState} points={points} score={score} setScore={setScore} />}
      </div>
    </div>
  );
}

export default App;
