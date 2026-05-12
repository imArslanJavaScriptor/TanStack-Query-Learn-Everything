import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-zinc-100 tracking-wide hover:text-blue-400 transition-colors duration-200"
        >
          TanStackQuery/ReactQuery
        </NavLink>

        {/* Navigation */}
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/traditional-fetching"
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              TraditionalFetching
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/fetch-with-tanstack-query"
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              FetchWithTanstackQuery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tanstack-features-rich"
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              TanstackFeaturesRich
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;