import React, { useContext, useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import MoonLoader from "react-spinners/MoonLoader";
import { MdAlternateEmail, MdFacebook, MdOutlineLock } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Context/Context";

const Login = () => {
  const { Login, googleSignIn } = useContext(authContext);
  const location = useLocation();
  const navigation = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [see, setSee] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((result) => {
        const user = result?.user;
        const email = {
          email: user?.email,
        };
        console.log(email);
        //jwt token
        fetch("https://mind-talking-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(email),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);
            navigation(from, { replace: true });
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });

        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    console.log(email, password);
  };

  //google log in

  const googleHandle = () => {
    setLoading(true);
    googleSignIn()
      .then((data) => {
        const user = data.user;
        console.log(user);
        const email = {
          email: user?.email,
        };
        //jwt token

        fetch("https://mind-talking-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(email),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoading(false);
            localStorage.setItem("token", data?.token);
            navigation(from, { replace: true });
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    document.title = "Login-Mind Talking";
  }, []);

  return (
    <div>
      {/* <div className="flex justify-center items-center mt-32">
          <ClockLoader color="#36d7b7" loading size={300} />
        </div> */}

      <div className="flex flex-col lg:flex-row lg:w-8/12 mx-auto lg:gap-16 lg:mt-10">
        <div>
          <img
            src="https://aacharyacomputer.in/login/website_images/gif_login.gif"
            alt=""
          />
        </div>
        <div className="w-96 mt-5">
          <CustomCard
            effectColor="#C780FF" // required
            color="#14AEFF" // default color is white
            blur={10} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
          >
            <h1 className="text-2xl text-center my-3">Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email :</label>
              <label className="relative block mb-4 ">
                <MdAlternateEmail className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></MdAlternateEmail>
                <input 
                  onFocus={() => setError("")}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
                  required
                />
              </label>
              <label htmlFor="password">Password :</label>
              <label className="relative block mb-4 ">
                <MdOutlineLock className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></MdOutlineLock>
                <input
                  onFocus={() => setError("")}
                  type={see ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
                  required
                />
                <label
                  onClick={() => setSee(!see)}
                  htmlFor="eye"
                  className="transition cursor-pointer w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-0 text-xl"
                >
                  {see ? (
                    <AiOutlineEyeInvisible id="eye"></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye id="eye"></AiOutlineEye>
                  )}
                </label>
              </label>
              {error && <p className="text-sm text-red-600 mb-1">{error}</p>}
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
              >
                {loading ? "Logging..." : "Login"}
              </button>
            </form>

            <p className="mt-8 text-center text-xs">or Login with</p>

            <ul className="mt-4 flex justify-center">
              <li className="mx-1">
                <button
                  onClick={googleHandle}
                  className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#DB4437] rounded-full"
                >
                  <AiOutlineGoogle className="text-white text-xl"></AiOutlineGoogle>
                </button>
              </li>
              <li className="mx-1">
                <button className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#1DA1F2] rounded-full">
                  <AiOutlineGithub className="text-white text-xl"></AiOutlineGithub>
                </button>
              </li>
              <li className="mx-1">
                <button className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#4267B2] rounded-full">
                  <MdFacebook className="text-white text-xl"></MdFacebook>
                </button>
              </li>
            </ul>
            <p className="text-xs mt-3 text-center">
              Don't have an account?
              <Link to={"/signup"} className="underline text-red-700 ml-2">
                Sign up
              </Link>
            </p>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

export default Login;
