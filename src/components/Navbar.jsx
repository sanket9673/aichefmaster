// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { navItems } from '../constants';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     // Start the navbar animation after a delay
//     setTimeout(() => setShowNavbar(true), 1000);
//   }, []);

//   return (
//     <nav
//       className={`${
//         showNavbar ? 'opacity-100' : 'opacity-0'
//       } transition-opacity duration-1000 bg-black text-white px-8 py-8 flex items-center justify-between`}
//     >
//       <div className="flex items-center space-x-5">
//         <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
//           <span>🌿</span>
//         </div>
//         <span className="text-lg font-semibold">AI CHEF MASTER</span>
//       </div>

//       <div className="flex space-x-20">
//         {navItems.map((item) => (
//           <Link
//             key={item.href}
//             to={item.href}
//             className="hover:text-gray-400"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </div>

//       <button className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 mr-16 rounded">
//         Let's Start
//       </button>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../constants';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Start the navbar animation after a delay
    setTimeout(() => setShowNavbar(true), 1000);
  }, []);

  return (
    <nav
      className={`${
        showNavbar ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 bg-black text-white px-8 py-8 flex items-center justify-between`}
    >
      <div className="flex items-center space-x-5">
        <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
          <span>🌿</span>
        </div>
        <span className="text-lg font-semibold">AI CHEF MASTER</span>
      </div>

      <div className="flex space-x-20">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className="relative hover:text-gray-400"
            // This adds an underline to the active nav item
            style={({ isActive }) => ({
              borderBottom: isActive ? '2px solid white' : 'none',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <button className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 mr-16 rounded">
        Let's Start
      </button>
    </nav>
  );
};

export default Navbar;
