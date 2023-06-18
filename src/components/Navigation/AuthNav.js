import React from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register" 
      exact="true"
      >
        Register
      </StyledLink>
      <StyledLink to="/login" 
      exact="true"
      >
        Login
      </StyledLink>
    </div>
  );
}
