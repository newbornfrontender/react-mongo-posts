import React from 'react';

export const Button = ({ type = 'button', onClick, children, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
