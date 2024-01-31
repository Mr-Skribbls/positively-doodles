import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header.component';
import Menu from '../components/menu/menu.component';
import Footer from '../components/footer/footer.component';

interface SharedLayoutProps {

}

const SharedLayout:FC<SharedLayoutProps> = () => {
  return (
    <>
      <Header />
      <Menu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;