import React from 'react';
import { useNavbarStore } from '../../store/navbar/navbar.store';

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useNavbarStore();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-base-100 text-base-content shadow-lg z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:top-auto lg:left-auto lg:shadow-none`}
      >
        <div className="p-6 ">
          <h2 className="text-2xl font-semibold mb-6">Menú</h2>
          <ul className="space-y-4">
            <li><a href="/" className="block text-lg">Inicio</a></li>
            <li><a href="/" className="block text-lg">Descargar App</a></li>
            <li><a href="/" className="block text-lg">Sobre nosotros</a></li>
            <li><a href="/" className="block text-lg">Artículos</a></li>
            <li><a href="/" className="block text-lg">Opiniones</a></li>
          </ul>
          <div className="mt-8 divider">Comienza ahora</div>
          <div className='mt-8 items-center space-y-4'>
          <a className='btn w-full btn-secondary rounded-full font-bold' >
            Iniciar sesión
          </a>
          <a className='btn w-full btn-secondary rounded-full font-bold' >
            Registrarse
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;