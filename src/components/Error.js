import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error Loading this page mate!!!</h1>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;
