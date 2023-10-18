import { Link, Outlet } from 'react-router-dom';
// import Planeticon from '../assets/Planeticon.png';

function NavLink() {
  return (
    <div className="root-container">
      <div className="header">
        <div className="logo-header">
          {/* <img src={Planeticon} alt="planet-icon" /> */}
          Logo
          <h1 className="heading">
            FinMetrics
          </h1>
        </div>
        <nav>
          <ul className="nav-items">
            <li><Link to="home">Home</Link></li>
            <li><Link to="missions">Details</Link></li>
            {/* <li><Link to="profile">|&nbsp;&nbsp;&nbsp;My Profile</Link></li> */}
          </ul>
        </nav>
      </div>
      <hr className="nav-hr" />
      <Outlet />
    </div>
  );
}

export default NavLink;
