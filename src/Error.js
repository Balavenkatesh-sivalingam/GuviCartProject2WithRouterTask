import { useRouteError } from "react-router-dom"; 
const Error = () => {
  const err = useRouteError();
  console.error(err); 

  return (
    <div>
      <h1>OPPSSS!!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err?.status ? `${err.status} ${err.statusText}` : "Unknown error"}
      </h3>
      {err?.data && <p>{err.data}</p>}
    </div>
  );
};

export default Error;
