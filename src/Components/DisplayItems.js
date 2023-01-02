import React, { Component } from 'react';
import './style.css';

const DisplayItems = ({
  showCheck,
  inputs,
  filterSelected,
  Edit,
  onDelete,
}) => {
  const checked = (e, index) => {
    showCheck(e, index);
  };

  let items = inputs;
  if (filterSelected === 'Active') {
    items = inputs.filter(({ selected }) => selected === false);
  }

  if (filterSelected === 'completed') {
    items = inputs.filter(({ selected }) => selected === true);
  }
  let data = items.map((listItem, index) => {
    return (
      <div className="display container" key={index}>
        <input
          type="checkbox"
          onChange={(e) => checked(e, index)}
          checked={listItem.selected === true}
        ></input>
        <label className={listItem.selected ? 'strike' : ''}>
          {listItem.name}
        </label>
        <div className="edit-delete">
          <button
            type="button"
            className="btn btn-light "
            onClick={() => Edit(index)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger "
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return <div className="display-data">{data}</div>;
};

export default DisplayItems;
