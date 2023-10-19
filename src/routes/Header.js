import { NavLink, Outlet } from 'react-router-dom';
import {
  HiHome,
  HiOutlineMicrophone,
} from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
// import { IconContext } from 'react-icons/lib';
import Breadcrumb from './Breadcrumb';

function Header() {
  // <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}></IconContext.Provider>
  return (
    <div className="app-container">
      <div className="header">
        <div className="home-icon">
          <NavLink to="/"><i className="header-icons"><HiHome /></i></NavLink>
        </div>
        <Breadcrumb />
        <ul className="tools">
          <li><NavLink to="/voice"><i className="header-icons"><HiOutlineMicrophone /></i></NavLink></li>
          <li><NavLink to="/settings"><i className="header-icons"><FiSettings /></i></NavLink></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
