import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const MainLayout = () => {
  console.log('Render MainLayout');

  return (
    <div className='bg-base-100 flex h-dvh'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <div className='bg-primary'>
          <Navbar />
        </div>
        <div className='relative h-full flex overflow-hidden container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
