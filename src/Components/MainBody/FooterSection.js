import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSection = () => {
  return (
    <div>
      <footer className="p-4 text-white sm:p-6 bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">Mind Talking</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                Follow me
              </h2>
              <ul className=" dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Right
              </h2>
              <ul className=" dark:text-gray-400">
                <li className="mb-4">
                  <a href="." className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="." className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Mind Talking™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="." className="text-gray-500 dark:hover:text-white">
              <BsFacebook></BsFacebook>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="."
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsInstagram></BsInstagram>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="."
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsTwitter></BsTwitter>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="."
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsGithub></BsGithub>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
