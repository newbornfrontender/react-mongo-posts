import React from 'react';

export const FieldWrapper = ({ title, children }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};
