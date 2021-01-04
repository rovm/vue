import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';
  const number = 0;
  return (
    // Vitual Dom에서는 컴포넌트의 변화를 감지할때, 효율저긍로 비교할 수 있도록 하나의 DOM트리 구조로 이루어져야 한다는 규칙
    // <div> 
    //   <h1>리액트 안녕!</h1>
    //   <h2>잘 작동 하니?</h2>
    // </div>

    /* 또는 <></> 와 같이 표현 */
    // <Fragment> 
    //   <h1>{name} 안녕!</h1>
    //   <h2>잘 작동 하니?</h2>
    // </Fragment>  
  
    /* if문이 사용이 불가함으로 삼항연산자 사용*/
    // <div>
    //   {name === '리액트' ? (
    //     <h1>리액트입니다.</h1>
    //   ) : (
    //     <h2>리액트가 아닙니다.</h2>
    //   )}
    // </div>

    // <div>
    //   {name === '리액트' && <h1>리액트입니다.</h1>}
    // </div>

    //주의 falsy 한값인 0 은 예외적으로 화면에 나타남 
    number && <div>내용</div>
  )
}

export default App;
