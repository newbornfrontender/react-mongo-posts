import React from 'react';

export const Comment = ({ name, value, onChange, placeholder, cols, rows }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
    />
  );
};
