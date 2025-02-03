import React, { useState } from "react";

const TodoList = (props) => {
  // [1] props 구조분해
  const { todos, setTodos } = props;

  // [2] doneList와 workingList 변수 선언! (**매우 중요**)
  const doneList = todos.filter((todo) => todo.isDone);
  const workingList = todos.filter((todo) => !todo.isDone);

  // [3] Working _ 삭제 버튼 핸들러
  const handleDeleteBtn = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // [4] Working & Done _ 완료 및 취소 토글 버튼 핸들러 (**중요**)
  const handleToggleBtn = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    });
  };

  // [5] Done _ 삭제 버튼 핸들러
  const handleDoneDeleteBtn = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h3>Working..🔥</h3>
      <div className="list-container">
        {workingList.map((todo) => (
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
              onClick={() => handleToggleBtn(todo.id)}
            >
              완료
            </button>
          </div>
        ))}
      </div>

      <h3>Done!🎉</h3>
      <div className="list-container">
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
              onClick={() => handleToggleBtn(done.id)}
            >
              취소
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
