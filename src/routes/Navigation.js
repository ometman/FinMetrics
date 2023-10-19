import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  HiHome,
  HiMenu,
  HiOutlineMicrophone,
} from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
// import logosize from '../index.css';

// import Planetic on from '../assets/Planeticon.png';

function Navigation() {
  return (
    <div className="root-container">
      <div className="header">
        <div className="logo">
          <HiMenu />
        </div>
        <nav>
          <ul className="nav-items">
            <li>
              <NavLink
                to="home"
              >
                <HiHome />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="home"
              >
                FinMetrics
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="tools">
          <li><Link to="/voice"><HiOutlineMicrophone /></Link></li>
          <li><Link to="/settings"><FiSettings /></Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
