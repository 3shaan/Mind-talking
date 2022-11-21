import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loader/Loading";
import Error from "../Loader/Error";

const Services = () => {
  // const [service, setService] = useState([]);
  // useEffect(() => {
  //   document.title = "Service-Mind Talking";
  //   fetch("https://mind-talking-server.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setService(data))
  //     .catch((err) => console.log(err));
  // }, []);

    const {
      data: service = [],
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["allService"],
      queryFn: async () => {
        const res = await fetch(
          "https://mind-talking-server.vercel.app/services"
        );
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Loading></Loading>;
    }
    if (isError) {
      console.log(error.message);
      return <Error isError={error}></Error>;
    }
  return (
    <div>
      <ServiceBanner></ServiceBanner>
      {/* services card  */}

      <div className="w-11/12 mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {service.map((data) => (
            <ServiceCard key={data._id} ServiceData={data}></ServiceCard>
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default Services;
