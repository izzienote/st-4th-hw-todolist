import React, { useState } from "react";

const TodoForm = (props) => {
  const { todos, setTodos } = props;

  const baseForm = {
    id: crypto.randomUUID(),
    title: "",
    content: "",
  };

  const resetForm = () => {
    SetNewTodo(baseForm);
  };

  const [newTodo, SetNewTodo] = useState(baseForm);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    SetNewTodo({ ...newTodo, [name]: value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    //유효성검사
    if (!newTodo.content || !newTodo.title) {
      alert("제목과 내용을 모두 기입해주세요!");
      return;
    }
    setTodos([...todos, newTodo]);
    resetForm();
  };
  console.log(todos);

  return (
    <form className="form-container" onSubmit={handleAddSubmit}>
      <div>
        <label>
          제목
          <input
            name="title"
            type="text"
            value={newTodo.title}
            onChange={handleOnChange}
          />
        </label>
        <label>
          내용
          <input
            name="content"
            type="text"
            value={newTodo.content}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <button type="submit" className="add-btn">
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
