import { Outlet } from 'react-router-dom';

import MainMenu from 'components/MainMenu/MainMenu';

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
};
export default SharedLayout;
