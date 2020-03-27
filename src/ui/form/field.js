import React from 'react';

export const Field = ({ name, value, onChange, type = 'text', placeholder }) => {
  return (
    <input name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} />
  );
};
