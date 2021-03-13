import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';
  
  // return (
  //   <>
  //     <div className="react">{name}</div>
  //     <input/>  
  //   </>
  // )

  // return (
  //   <>
  //     {/* 주석은 이렇게 작성합니다. */}
    
  //     <div
  //       className =  "react" //시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성 할 수 있습니다.
  //     >
  //       {name}
  //     </div>

  //     //하지만 이런 주석이나 
  //     /* 이런 주석은 페이지에 그래도 나타나게 됩니다. */
  //     <input/>
  //   </>
  // );

  return (
    <div>
      <div className="react">{
        name
      }</div>
        <h1>들여쓰기가 이상한</h1>
       <h2>코드</h2>
       <p>입니다.</p>
          </div>
  )
}

export default App;
