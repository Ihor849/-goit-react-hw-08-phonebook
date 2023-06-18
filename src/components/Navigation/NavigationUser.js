
import React from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';



const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return(
    <div>
      
    <StyledLink to="/"
     exact="true"
     >
      Home
    </StyledLink>
    {isLoggedIn && <StyledLink
      to="/phonebook"
      exact="true"
    >
      Phonebook
    </StyledLink> }
    
  </div>
  )
  
}
  


export default Navigation;