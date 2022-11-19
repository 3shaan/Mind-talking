import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { authContext } from "../Context/Context";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className=" h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-green-600 whitespace-nowrap text-3xl font-bold dark:text-white">
          Mind Talking
        </span>
      </Navbar.Brand>
      <div className="lg:flex md:order-2  ">
        <Link to={"/appointments"}>
          <button
            type="button"
            className="text-white hidden lg:block bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Appointment
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to={"/"}>
          <Navbar.Link className="hover:underline text-xl">Home</Navbar.Link>
        </NavLink>
        <NavLink to={"/services"}>
          <Navbar.Link className="hover:underline text-xl">
            Services
          </Navbar.Link>
        </NavLink>
        <NavLink to={"/blogs"}>
          <Navbar.Link className="hover:underline text-xl">Blogs</Navbar.Link>
        </NavLink>

        {user?.uid ? (
          <>
            <NavLink to={"/add_services"}>
              <Navbar.Link className="hover:underline text-xl">
                Add Service
              </Navbar.Link>
            </NavLink>
            <NavLink to={"/myreview"}>
              <Navbar.Link className="hover:underline text-xl">
                My Review
              </Navbar.Link>
            </NavLink>
            <NavLink to={"/dashboard"}>
              <Navbar.Link className="hover:underline text-xl">
                Dashboard
              </Navbar.Link>
            </NavLink>
            <NavLink onClick={logOut}>
              <Navbar.Link className="hover:underline text-xl">
                Log out
              </Navbar.Link>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <Navbar.Link className="hover:underline text-xl">
                Login
              </Navbar.Link>
            </NavLink>
            <NavLink to={"/signup"}>
              <Navbar.Link className="hover:underline text-xl">
                Register
              </Navbar.Link>
            </NavLink>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
