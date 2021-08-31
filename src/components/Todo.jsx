import React from 'react';
import propTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todo }) => (
  <div>
    <User user={todo.user} />
    <p>
      {`Title - ${todo.title}`}
    </p>
    <p>
      {`Status - ${todo.completed}`}
    </p>
  </div>
);

Todo.propTypes = {
  todo: propTypes.shape({
    user: propTypes.object,
    title: propTypes.string.isRequired,
    completed: propTypes.bool,
  }).isRequired,
};
