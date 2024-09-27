import React from 'react';
import { useNavbarStore } from '../../store/navbar/navbar.store';
import SpainFlag from '../../assets/spain.svg';
import UsaFlag from '../../assets/usa.svg';
import Star from '../../assets/vector.svg';

const Navbar: React.FC = () => {
  const { theme, setTheme, language, setLanguage, toggleSidebar } = useNavbarStore();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="navbar sm:px-12 bg-primary text-primary-content w-screen">
      <div className="navbar-start gap-4">
        <button className="btn btn-ghost lg:hidden" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className='flex gap-3 items-center'>
          <img src={Star} alt="Logo"/>
          <a href='/' className="text-primary-content font-bold text-xl">TROT<span className='text-white'>APP</span></a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-sm font-medium  gap-5">
          <li><a>Inicio</a></li>
          <li><a>Descargar App</a></li>
          <li><a>Sobre nosotros</a></li>
          <li><a>Artículos</a></li>
          <li><a>Opiniones</a></li>
        </ul>
      </div>
      <div className="navbar-end lg:gap-6">
        <div className='lg:gap-4 items-center hidden lg:flex'>
          <a className='btn btn-sm btn-secondary rounded-badge drop-shadow font-bold' >
            Iniciar sesión
          </a>
          <a className='btn btn-sm btn-secondary rounded-badge drop-shadow font-bold' >
            Registrarse
          </a>
        </div>
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" onClick={handleThemeChange} />

          {/* sun icon */}
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            {language === 'es' ? (
              <div className="flex items-center">
                <img src={SpainFlag} alt="Bandera de España" className="w-6 h-6 mr-2" />
                Español
              </div>
            ) : (
              <div className="flex items-center">
                <img src={UsaFlag} alt="Bandera de Usa" className="w-6 h-6 mr-2" />
                English
              </div>
            )}
          </label>

          {/* El contenido del dropdown */}
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-base-content rounded-box w-52">
            <li>
              <a onClick={() => handleLanguageChange('es')}> 
                <img src={SpainFlag} alt="Bandera de España" className="w-6 h-6 mr-2" />
                Español 
              </a>
            </li>
            <li>
              <a onClick={() => handleLanguageChange('en')}> 
                <img src={UsaFlag} alt="Bandera de Usa" className="w-6 h-6 mr-2" />
                English 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
