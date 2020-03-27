import React, { useState } from 'react';

import { Field } from '../ui/form/field';
import { Comment } from '../ui/form/comment';
import { FieldWrapper } from '../ui/form/field-wrapper';
import { Button } from '../ui/form/button';

export const NewPost = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const isAllFieldsEmpty = !(title.trim() && comment.trim());
  const isOneFieldFilled = !(title.trim() || comment.trim());

  const handleReset = () => {
    setTitle('');
    setComment('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && comment.trim()) handleReset();
  };

  const handleFieldChange = (e) => setTitle(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FieldWrapper title="Title">
          <Field name="title" onChange={handleFieldChange} value={title} placeholder="title" />
        </FieldWrapper>

        <FieldWrapper title="Comment">
          <Comment
            name="comment"
            onChange={handleCommentChange}
            value={comment}
            placeholder="comment"
          />
        </FieldWrapper>

        <div>
          <Button type="submit" disabled={isAllFieldsEmpty}>
            Add Post
          </Button>
          <Button onClick={handleReset} disabled={isOneFieldFilled}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};
