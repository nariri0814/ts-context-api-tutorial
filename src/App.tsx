import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;

// Context API를 사용하여 상태를 관리 할 때 useReducer를 사용
// 상태 전용 Context 와 디스패치 함수 전용 Context를 만들면 매우 유용
