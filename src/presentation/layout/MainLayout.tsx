/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const MainLayout = () => {
  console.log('Render MainLayout');

  return (
    <div className='flex bg-base-100 h-dvh'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <div className='bg-primary'>
          <Navbar />
        </div>
        <div className='container relative flex h-full overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
