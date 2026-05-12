import { Link } from "react-router-dom";
import { fetchPosts } from "../../API/Api-RQ";
import { useQuery } from "@tanstack/react-query";
import Loader from "../UI/Loader";
import ErrorUI from "../UI/ErrorUI";
import PostCard from "../UI/PostCard";

const FetchWithTanStackQuery = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(5),
    // gcTime: 1000,
    // staleTime: 1000, 1s ke bad data purana ho jaiga again route hit krne pr server pr api call jai gi.
    // Polling
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true
  });

  // Loading UI
  if (isLoading) return <Loader loadingMessage={"Loading"} />;

  // Error UI
  if (isError) return <ErrorUI error={error} />;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            TanStack Query Fetching
          </h1>

          <p className="text-zinc-400 mt-3 max-w-2xl">
            Modern server-state management using React Query with automatic
            caching, background refetching, loading states, and error handling.
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <div
            className={`w-3 h-3 rounded-full ${
              isFetching ? "bg-yellow-400 animate-pulse" : "bg-green-400"
            }`}
          ></div>

          <span className="text-sm text-zinc-400">
            {isFetching ? "Refreshing Data..." : "Data Synced"}
          </span>
        </div>
      </div>

      {/* Posts Grid */}
      <ul className="max-w-7xl mx-auto grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {data?.data?.map((curElem) => {
          const { id, title, body } = curElem;

          return <PostCard id={id} title={title} body={body} />;
        })}
      </ul>
    </div>
  );
};

export default FetchWithTanStackQuery;
