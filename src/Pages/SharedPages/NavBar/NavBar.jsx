import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
  const navOptions = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/all-tools",
      label: "All Tools",
    },
    {
      path: "/about-us",
      label: "About Us",
    },
    {
      path: "/contact-us",
      label: "Contact Us",
    },
    {
      path: "/authentication",
      label: "Login / Register",
    },
  ];

  return (
    <div>
      <div className="navbar bg-slate-100 dark:bg-slate-900 fixed top-0 z-[1000]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="w-5 h-5"></HiMenuAlt1>
            </div>
            <ul
              tabIndex={0}
              className="flex flex-col gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 dark:bg-slate-900 rounded-box w-52"
            >
              {navOptions.map((option, index) => (
                <li key={index} className="uppercase font-semibold text-slate-800 dark:text-slate-50">
                  <Link key={index} to={option.path}>
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-ghost text-2xl font-bold">MediaMaserHub</button>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex justify-center items-center gap-10 px-1">
            {navOptions.map((option, index) => (
              <li key={index} className="uppercase font-semibold text-slate-800 dark:text-slate-50">
                <Link key={index} to={option.path}>
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
