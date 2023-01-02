import React, { Component, useEffect, useState } from 'react';

const Header = ({ editElement, inputSubmit }) => {
  const [input, setInput] = useState('');
  useEffect(() => {
    if (editElement) {
      setInput(editElement.name);
    }
  }, []);
  const onFormSubmit = (e) => {
    e.preventDefault();
    inputSubmit(input, editElement ? true : false);
  };

  return (
    <div className=" container p-5">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Add New"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Header;
