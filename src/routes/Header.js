import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  HiHome,
  HiOutlineMicrophone,
} from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';

function Header() {
  const location = useLocation();
  const toBack = () => window.history.back();
  const toForward = () => window.history.forward();

  return (
    <div className="app-container app-shadow">
      <div className="header">
        <div className="home-icon">
          {!(location.pathname === '/')
            ? (
              <>
                <NavLink to={toBack}>
                  <i className="header-icons">
                    <FaAngleLeft onClick={toBack} />
                  </i>
                </NavLink>
                <NavLink to={toForward}>
                  <i className="header-icons">
                    <FaAngleRight onClick={toForward} />
                  </i>
                </NavLink>
              </>
            ) : (
              <NavLink to="/"><i className="header-icons"><HiHome /></i></NavLink>
            )}
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
