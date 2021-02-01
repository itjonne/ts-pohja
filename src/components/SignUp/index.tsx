import React from 'react';

import { ROUTES } from '../../constants';
import { SignUpForm } from './SignUpForm';

export default () => {
  return(
    <div id="form">
      <h1>Sign up:</h1>
      <SignUpForm />
    </div>
  )
};