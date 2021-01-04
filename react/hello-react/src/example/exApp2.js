import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  // const name = undefined;
  // return name || '값이 undefined 입니다.';

  const name = '리액트';
  // const style = {
  //   //background-color는 -가 사라지고 카멜 표기법으로 표기
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: 16
  // };

  // return(
  //   <div style={style}>{name}</div>
  // )

  //return <div className='react'>{name}</div>

  return(
    <form>
      성: <br/>
      <input/><br/>
      이름: <br/>
      <input/>
    </form>
  )
}

export default App;
