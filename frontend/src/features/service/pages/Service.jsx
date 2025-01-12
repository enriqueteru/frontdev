import { useParams } from "react-router-dom";

const Service = () => {
  const { serviceId } = useParams();
  const { name, description, id } = {
    id: 1,
    name: "Service 1",
    description: "This is a description of service 1",
  };

  if (!id) {
    return <div>Loading...{serviceId}</div>;
  }

  return (
    <div className="mt-16 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h1 className="text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
          {name}
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
