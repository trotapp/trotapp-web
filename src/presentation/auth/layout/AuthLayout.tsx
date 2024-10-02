import { Outlet } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import Navbar from '../../layout/Navbar';

export const AuthLayout = () => {
  return (
    <div className="bg-base-100 flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div className="bg-primary fixed w-full z-50">
          <Navbar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
