import { useEffect, useState } from "react";

const allMenus = [
 
  {
    id: 2,
    title: "menu ",
    path: "/menu",
  },
  {
    id: 4,
    title: " Servicios ",
    path: "/servicios",
  },
  {
    id: 5,
    title: " conocenos ",
    path: "/about",
  },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window !== "undefined") {
      const url = window.location.pathname.split("/")[1];
      setCurrentPage("/" + url);
    }
  }, []);

  return (
    <header className="bg-white shadow-md sticky sm:block top-0 z-50 mb-10 text-[#1b1b1b]">
      <nav className="flex items-center justify-between h-16 px-4 max-w-[1080px] mx-auto">
        <div className="flex items-center  w-full h-6">
          <a href="/" className="flex items-center ">
            <img
              className=" top-[-5px] left-[-2px] w-28 h-28"
              src="/NavbarLogo-removebg.png"
              alt=""
            />
          </a>
        </div>

        <div className="hidden sm:flex  gap-x-4">
          {allMenus.map((menu) => {
            return (
              <NavBarLinks
                key={menu.id}
                href={menu.path}
                active={currentPage === menu.path}
              >
                {menu.title}
              </NavBarLinks>
            );
          })}
        </div>
        <div className="relative" onClick={() => setShowMenu(!showMenu)}>
          {/* Hamburger menu */}
          <div
            className={` sm:hidden p-2 rounded-lg transition-all ease-in-out duration-500 ${
              showMenu ? "bg-rojo-bandera shadow-red-400 shadow-sm text-white" : ""
            } `}
          >
            <MenuIcon />
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      
        <section className={`${showMenu ? "" : "translate-x-[645px]"} transition-all ease-in-out duration-700  fixed top-16  left-0 sm:hidden  z-50 bg-slate-100 w-screen  h-screen flex flex-col gap-y-4 items-center pt-10`}>
          <img 
          className="absolute object-cover top-[-5px] left-[-2px] w-full h-full z-0 opacity-55" 
          src="https://imgs.search.brave.com/y5w_OtS6NkUCyKbiPvtl1R8aLGvkrvUmRCdCjHj4qCY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzYzMTAw/NTUzMTYtZDczYzlk/NWVlYjUxP2ZtPWpw/ZyZ3PTMwMDAmYXV0/bz1mb3JtYXQmZml0/PWNyb3AmcT02MCZp/eGxpYj1yYi00LjAu/MyZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE5YeDhj/bVZ6ZEdGMWNtRnVk/SE44Wlc1OE1IeDhN/SHg4ZkRBPQ" alt="" />
          {allMenus.map((menu) => {
            return (
              <div
                key={menu.id}
                className=" flex relative z-10 justify-center items-center rounded-lg bg-rojo-bandera  px-5 py-3 text-lg font-medium text-white  transition hover:shadow-xl hover:bg-rojo-bandera/75 "
              >
                <NavBarLinks
                  href={menu.path}
                  active={currentPage === menu.path}
                >
                  {menu.title}
                </NavBarLinks>
              </div>
            );
          })}
        </section>
      
    </header>
  );
};

export default NavBar;

type NavBarLinksProps = {
  href: string;
  active: boolean;
  children: string;
};
const NavBarLinks = ({ href, active, children }: NavBarLinksProps) => {
  return (
    <div className="flex pl-4 sm:pl-0 sm:items-center flex-col gap-x-2 w-[220px]   sm:w-[80px]">
      <a href={href} className={`inline-block no-underline  capitalize `}>
        {children}
      </a>
      <span
        className={` ${
          active ? "bg-white sm:bg-rojo-bandera w-[120px] sm:w-[80px]" : "w-3"
        } mt-2  h-2 rounded-full transition-all ease-out duration-200`}
      ></span>
    </div>
  );
};

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-Width="2"
      stroke-Linecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-menu-2"
    >
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
};
