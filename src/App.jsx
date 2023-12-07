import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Loadingbar from './components/Loadingbar';

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
  const [visible, setVisible] = useState(false); 
  const list = [
    { 
      name : '김효영',
      url: 'hyo',
      description: '짱짱맨'
    }, 
    { 
      name : '김윤지',
      url: 'yun',
      description: '멋쟁이'
    }, 
    { 
      name : '김문성',
      url: 'moon',
      description: '잠만보'
    }, 
    { 
      name : '정예은',
      url: 'yen'
    }, 
    { 
      name : '김은희',
      url: 'eunhee'
    }, 
    { 
      name : '최윤이',
      url: 'yooni'
    }, 
    { 
      name : '강다원',
      url: 'dawon'
    }, 
    { 
      name : '강다혜',
      url: 'dahey'
    }, 
  ];
  const [names, setNames] = useState([]);

  const submit = () => {
    setVisible(true);

    setTimeout(() => {
      let check = true;
      let names; 
      while (check) {
        names = shuffleArray(list);
        
        if (
          names[0].name === '김문성' && names[1].name === '정예은'
            || names[1].name === '김문성' && names[0].name === '정예은'
            || names[2].name === '김문성' && names[3].name === '정예은'
            || names[3].name === '김문성' && names[2].name === '정예은'
            || names[4].name === '김문성' && names[5].name === '정예은'
            || names[5].name === '김문성' && names[4].name === '정예은'
            || names[6].name === '김문성' && names[7].name === '정예은'
            || names[7].name === '김문성' && names[6].name === '정예은'
        ) {
          check = false;
        }
      }

      setNames(names);
      
    }, 3800);
  };

  useEffect(() => {
    move(names);
  }, [names]);

  const move = (names) => {
    names.forEach(({ name }, index) => {
      
      setTimeout(() => {
        const source = document.querySelector(`.profile-item[data-profile=${name}]`)
        const target = document.querySelector(`.table-name[data-name=${name}]`);
        const { offsetTop, offsetLeft } = target;
        const { offsetTop: poffsetTop, offsetLeft: poffsetLeft } = source;
        source.style.position = 'fixed';
        source.style.left = poffsetLeft + 'px';
        source.style.top = poffsetTop + 'px';

        setTimeout(() => {
          source.style.left = offsetLeft + 'px';
          source.style.top = offsetTop + 'px';
        }, 200);
      }, index * 500)
    });
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <> 
      <Header />
      <Profile list={list} />
      <button onClick={submit}>추첨</button>
      <button onClick={reset}>리셋</button>
      <div className='app'>
        <div className='left'>
          <ul>
            {
              names
                .filter((v, i) => i < 4)
                .map(({ name }) => (
                  <li className="table-name" key={name} data-name={name} />
                ))
            }
          </ul>
        </div>      
        <div className='table'>테이블</div>
        <div className='right'>
          <ul>
            {
              names
                .filter((v, i) => i > 3)
                .map(({ name }) => (
                  <li className="table-name" key={name} data-name={name} />
                ))
            }
          </ul>
        </div>
      </div>

      <Loadingbar visible={visible} setVisible={setVisible} />
    </>
  )
}

export default App
