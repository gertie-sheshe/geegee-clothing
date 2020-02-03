import React from 'react';

import SignIn from '../../components/sign-in/sign-in-component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInSignUpContainer } from './auth.component.styles';

const Auth = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default Auth;
