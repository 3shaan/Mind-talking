import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";

const MoreService = ({ id }) => {
  // const [restData, setRestData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://mind-talking-server.vercel.app/rest/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setRestData(data))
  //     .catch((err) => console.log(err));
  // }, [id]);
  const {
    data: restData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["restData"],
    queryFn: async () => {
      const res = await fetch(
        `https://mind-talking-server.vercel.app/rest/${id}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <Error isError={error}></Error>;
  }
  return (
    <div>
      <div className="mx-3 mt-32 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          See Our More Services
        </h5>
        <div>
          {restData.map((data) => {
            return (
              <Link to={`/services/${data?._id}`} key={data._id}>
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {data?.title}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreService;
