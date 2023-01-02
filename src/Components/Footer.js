import React, { Component } from 'react';

const Footer = ({ show, onFilterSelect }) => {
  return (
    <div className="footer">
      <div className=" container">
        <button type="button" className="btn btn-light add" onClick={show}>
          Add
        </button>
        <div className="activity">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onFilterSelect('All')}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onFilterSelect('Active')}
          >
            Active
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onFilterSelect('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
