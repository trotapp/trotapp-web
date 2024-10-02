import React from 'react';
import { useNavbarStore } from '../../store/navbar/navbar.store';
import { NavLink } from 'react-router-dom';
import { linksMenu } from '../components/LinksMenu';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLogin, CiUser } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useNavbarStore();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`xl:hidden fixed top-0 left-0 w-64 h-full bg-base-100 text-base-content shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out xl:translate-x-0 xl:relative xl:top-auto xl:left-auto xl:shadow-none`}
      >
        <div className="p-6 ">
          <h2 className="text-2xl font-semibold mb-6">Menú</h2>
          <ul className="space-y-4">
            {linksMenu.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'font-extrabold text-lg flex items-center transition-all' : 'text-base-content'
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <FaArrowRightLong className="mr-2" />}
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='lg:hidden'>
            <div className="mt-8 divider">Comienza ahora</div>
            <div className='mt-8 items-center space-y-4'>
              <NavLink to="/login" className='btn w-full btn-secondary rounded-full font-bold' >
                <CiLogin />
                Iniciar sesión
              </NavLink>
              <NavLink to="/register" className='btn w-full btn-secondary rounded-full font-bold' >
                <CiUser />
                Registrarse
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;