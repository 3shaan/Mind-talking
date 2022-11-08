import ServiceBanner from './ServiceBanner';
import { Get } from "react-axios";
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
      <div>
        <ServiceBanner></ServiceBanner>
        {/* services card  */}

        <div className='w-11/12 mx-auto mt-10'>
          <Get url="http://localhost:5000/services">
            {(error, response, isLoading, makeRequest, axios) => {
              console.log(response?.data);
              return (
                <div className="grid grid-cols-3 gap-10">
                  {response?.data.map((data) => (
                    <ServiceCard
                      key={data._id}
                      ServiceData={data}
                    ></ServiceCard>
                  ))}
                </div>
              );
            }}
          </Get>
            </div>
            <div>
                <h1 className="text-3xl text-center mt-10">Add a Service</h1>
            </div>
      </div>
    );
};

export default Services;