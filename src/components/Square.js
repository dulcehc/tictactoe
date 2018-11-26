import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <div className="Square">
      <button
        className="Square__btn"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;