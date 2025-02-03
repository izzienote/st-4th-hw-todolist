import React, { useState } from "react";

const TodoList = (props) => {
  const { todos, setTodos } = props;
  //done 상태 추가
  const [doneList, setDoneList] = useState([]);
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const handleDeleteBtn = (id) => {
    //삭제랑 완료가 동일한 로직
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDoneBtn = (id) => {
    //삭제랑 완료가 동일한 로직
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    //done에 추가할
    const doneTodos = todos.find((todo) => todo.id === id);
    setDoneList([...doneList, doneTodos]);
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const handleDoneDeleteBtn = (id) => {
    const exceptCanceledTodos = doneList.filter((todo) => todo.id !== id);
    setDoneList(exceptCanceledTodos);
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const handleCancel = (id) => {
    //던리스트에서 삭제
    const exceptCanceledTodos = doneList.filter((todo) => todo.id !== id);
    setDoneList(exceptCanceledTodos);
    //셋투두리스트 업데이트
    const candeledTodos = doneList.find((todo) => todo.id === id);
    setTodos([...todos, candeledTodos]);
  };

  return (
    <>
      <h3>Working..🔥</h3>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-container">
          <h3>{todo.title}</h3>
          <div>{todo.content}</div>
          <div>{todo.isDone}</div>
          <button
            className="delete-btn"
            onClick={() => handleDeleteBtn(todo.id)}
          >
            삭제하기
          </button>
          <button
            className="done-cancel-btn"
            onClick={() => handleDoneBtn(todo.id)}
          >
            완료
          </button>
        </div>
      ))}

      <h3>Done!🎉</h3>
      {/* 여기에 doneList */}
      {doneList.map((done) => (
        <div key={done.id} className="todo-container">
          <h3>{done.title}</h3>
          <div>{done.content}</div>
          <button
            onClick={() => handleDoneDeleteBtn(done.id)}
            className="delete-btn"
          >
            삭제하기
          </button>
          <button
            className="done-cancel-btn"
            onClick={() => handleCancel(done.id)}
          >
            취소
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
