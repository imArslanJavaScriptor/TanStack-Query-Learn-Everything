import { useQuery } from "@tanstack/react-query";

const App = () => {

  const {data, isFetching, refetch, error} = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos
  });

  if(error) {
    return <div>Error occurred: {(error as Error).message}</div>
  }

  return <>
  <div>
    <div className="bg-black text-white p-2 font-medium text-2xl">TanStack Query App</div>
    <div>{isFetching ? "Loading..." : JSON.stringify(data?.slice(0, 10))}</div>
    <button onClick={() => refetch()}>Refetch</button>
  </div>
  </>;
};

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}
export default App;
 