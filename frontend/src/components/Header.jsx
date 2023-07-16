import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Routes for login and logout

const headerData = [
  { title: 'Home', url: '/' },
  { title: 'Login', url: '/login' },
  { title: 'Register', url: '/register' },
  { title: 'List company', url: '/list-company' },
  { title: 'Create Role', url: '/create-role' },
];

// Global Header component
const Header = () => {
  // Inits
  const [headerObj, setHeaderObj] = useState(headerData);

  // For handle the logout

  // JSX
  return (
    <header>
      <nav className=" border-gray-200  px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center order-2"></div>
          <div
            className=" justify-between items-center w-full flex  order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-row space-x-8 mt-0 w-full">
              {headerObj.map((singleHeaderObj, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={singleHeaderObj.url}
                      className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700  "
                      aria-current="page"
                    >
                      {singleHeaderObj.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
