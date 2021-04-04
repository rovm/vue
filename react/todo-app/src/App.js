import React, { useState, useRef, useCallback } from 'react';
import Todotemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos(){
  const array = [];

  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(
    createBulkTodos
    // [
    //   {
    //     id: 1,
    //     text: '리액트의 기초 알아보기',
    //     checked: true,
    //   },
    //   {
    //     id: 2,
    //     text: '컴포넌트 스타일링해 보기',
    //     checked: true,  
    //   },
    //   {
    //     id: 3,
    //     text: '일정 관리 앱 만들어 보기',
    //     checked: false,
    //   }
    // ]
  )

  //고유 값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    [],
  );

  const onREmove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
          todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [],
  );

  return (
    <Todotemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onREmove={onREmove} onToggle={onToggle}/>
    </Todotemplate>
  );
}

export default App;