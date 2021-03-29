import React from 'react';
import Todotemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';

const App = () => {
  return (
    <Todotemplate>
      <TodoInsert/>
    </Todotemplate>
  );
}

export default App;