import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export const MainLayout = () => {
  return (
    <div className="bg-base-100 flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div className="bg-primary w-full z-50">
=======
        <div className="bg-primary fixed w-full z-30">
          <Navbar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
