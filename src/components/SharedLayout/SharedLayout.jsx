import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContainerShared, Header } from './SharedLayout.styled';
import Navigation from 'components/Navigation/NavigationUser';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/Navigation/UserMenu';
import { authSelectors } from 'redux/auth';

const SharedLayouts = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ContainerShared className="containerShared">
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </ContainerShared>
  );
};

export default SharedLayouts;
