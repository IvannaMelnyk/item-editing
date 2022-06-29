import React, { useState, useEffect, useRef } from "react";

function ItemForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form className="item-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Add an item"
              value={input}
              className="item-input edit"
              onChange={handleChange}
              ref={inputRef}
            ></input>
            <button className="item-button">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add an item"
              value={input}
              className="item-input"
              onChange={handleChange}
              ref={inputRef}
            ></input>
            <button className="item-button">Add item</button>
          </>
        )}
      </form>
    </div>
  );
}

export default ItemForm;
