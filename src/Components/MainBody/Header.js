import { Navbar } from 'flowbite-react';
import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src={logo} className=" h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-green-600 whitespace-nowrap text-3xl font-bold dark:text-white">
            Mind Talking
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Apointment
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
            className="hover:underline text-xl"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="hover:underline text-xl">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="hover:underline text-xl">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="hover:underline text-xl">
            Blogs
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="hover:underline text-xl">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;