import React from 'react';
import MyComponent from './component/MyComponent'

const App = () => {
  //return <MyComponent name="React"/>;
  //return <MyComponent />;
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};


export default App;