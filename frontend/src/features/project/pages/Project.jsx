import { useParams } from "react-router-dom";

export const Project = () => {
  const { projectId } = useParams();
  const { id, name, description } = {
    id: 1,
    name: "Project 1",
    description: "This is a description of project 1",
  };

  if (!id) {
    return <div>Loading... {projectId}</div>;
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
