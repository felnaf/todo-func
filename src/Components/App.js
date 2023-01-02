import React, { Component, useState } from 'react';
import './style.css';
import Header from './Header';
import DisplayItems from './DisplayItems';
import Footer from './Footer';
const App = () => {
  const initialState = {
    show: false,
    inputs: [],
    filterSelected: 'All',
  };

  const [todoStates, setTodoStates] = useState(initialState);

  const inputSubmit = (input, isEditMode) => {
    if (!isEditMode) {
      setTodoStates({
        ...todoStates,
        inputs: [
          ...todoStates.inputs,
          { name: input, selected: false, isEditMode: false },
        ],
        show: false,
      });
    } else {
      setTodoStates({
        ...todoStates,
        inputs: todoStates.inputs.map((e) => ({
          ...e,
          name: e.isEditMode ? input : e.name,
          isEditMode: false,
        })),
        show: false,
      });
    }
  };
  const showCheck = (input, index) => {
    setTodoStates({
      ...todoStates,
      inputs: todoStates.inputs.map((obj, indexPos) => {
        return {
          ...obj,
          selected: indexPos === index ? input.target.checked : obj.selected,
        };
      }),
    });
  };

  const Edit = (ind) => {
    setTodoStates({
      ...todoStates,
      inputs: todoStates.inputs.map((data, index) => {
        return {
          ...data,
          isEditMode: index === ind ? true : data.isEditMode,
        };
      }),
    });
  };

  const onDelete = (e) => {
    setTodoStates({
      ...todoStates,
      inputs: todoStates.inputs.filter((listItem, index) => index !== e),
    });
  };

  const isEditing =
    todoStates.inputs.filter(({ isEditMode }) => isEditMode).length > 0;
  const editElement = !isEditing
    ? null
    : todoStates.inputs.find(({ isEditMode }) => isEditMode);
  return (
    <div className="container">
      <div className="header container p-5">
        <h3>THINGS TO DO</h3>
        {todoStates.show || isEditing ? (
          <Header inputSubmit={inputSubmit} editElement={editElement} />
        ) : null}
      </div>
      <DisplayItems
        inputs={todoStates.inputs}
        inputSubmit={inputSubmit}
        showCheck={showCheck}
        filterSelected={todoStates.filterSelected}
        onDelete={onDelete}
        Edit={Edit}
      />
      <Footer
        show={() => setTodoStates({ ...todoStates, show: true })}
        filterSelected={todoStates.filterSelected}
        onFilterSelect={(filter) =>
          setTodoStates({ ...todoStates, filterSelected: filter })
        }
      />
    </div>
  );
};

export default App;
