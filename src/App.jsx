import { useEffect, useState } from 'react';
import './App.css'

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
  const list = ['김효영', '김윤지', '김문성', '정예은', '김은희', '최윤이', '강다원', '강다혜'];
  const [names, setNames] = useState([]);
  
  useEffect(() => {
    setNames(shuffleArray(list));
  }, []);

  const reset = () => {
    setNames(shuffleArray(list));
  };

  return (
    <> 
      <button onClick={reset}>리셋</button>
      <div className='app'>
        <div className='left'>
          <ul>
            {
              names
                .filter((v, i) => i < 5)
                .map((name) => (
                  <li key={name}>{name}</li>
                ))
            }
          </ul>
        </div>      
        <div className='table'>테이블</div>
        <div className='right'>
          <ul>
            {
              names
                .filter((v, i) => i > 4)
                .map((name) => (
                  <li key={name}>{name}</li>
                ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
