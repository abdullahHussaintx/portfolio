import { useState } from "react";
import { Link } from "react-router-dom";

export const menuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/",
  },
  {
    id: 3,
    title: "Skills",
    url: "/",
  },
  {
    id: 4,
    title: "Projects",
    url: "/",
  },
  {
    id: 5,
    title: "Experiecne",
    url: "/",
  },
  {
    id: 6,
    title: "Contact",
    url: "/",
  },
];

export const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" flex items-center justify-between bg-black  px-4 h-16 text-white">
        <div>
          <h1 className=" text-4xl">ABDULLAH</h1>
        </div>

        <div className="block md:hidden" onClick={() => setIsOpen(!open)}>
          icon here
        </div>
        {open ? (
          <></>
        ) : (
          <div className=" hidden md:flex  gap-5">
            {menuItems.map((items) => (
              <Link key={items.id} to={items.url}>
                {items.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
      {open && (
        <div>
          <MobileViewNav />
        </div>
      )}
    </>
  );
};

export const MobileViewNav = () => {
  return (
    <div className="bg-black h-[calc(100vh-64px)]">
      <div className=" flex flex-col   text-white  h-full">
        <div className=" flex flex-col gap-5  items-center   h-full  justify-evenly ">
          {menuItems.map((items) => (
            <Link key={items.id} to={items.url} className=" text-4xl">
              {items.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
