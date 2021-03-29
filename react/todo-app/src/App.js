import React from 'react';
import Todotemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const App = () => {
  return (
    <Todotemplate>
      <TodoInsert/>
      <TodoList/>
    </Todotemplate>
  );
}

export default App;