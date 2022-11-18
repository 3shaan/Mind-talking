import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    document.title = "Service-Mind Talking";
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ServiceBanner></ServiceBanner>
      {/* services card  */}

      <div className="w-11/12 mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {service.map((data) => (
            <ServiceCard key={data._id} ServiceData={data}></ServiceCard>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center mt-10">Add a Service</h1>
      </div>
    </div>
  );
};

export default Services;
