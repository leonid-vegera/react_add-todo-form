import React from 'react';
import propTypes from 'prop-types';

export const User = ({ user }) => (
  <p>
    {`User - ${user.name}`}
  </p>
);

User.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};
