import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ul className="nav-items">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name}>
              {isLast ? (
                <>
                  <span>/</span>
                  <span>{name}</span>
                </>
              ) : (
                <>
                  <span>/</span>
                  <NavLink to={routeTo}>{name}</NavLink>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
