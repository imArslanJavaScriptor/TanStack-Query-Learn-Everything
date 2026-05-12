import { Link } from "react-router-dom";
import { fetchPosts } from "../../API/Api-RQ";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
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
  if (isLoading)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-14 h-14 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

          <p className="text-zinc-300 text-lg font-medium">
            Loading posts with TanStack Query...
          </p>
        </div>
      </div>
    );

  // Error UI
  if (isError)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
        <div className="bg-zinc-900 border border-red-500/30 rounded-2xl p-8 max-w-lg w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>

          <h2 className="text-2xl font-bold text-red-400 mb-3">
            Request Failed
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {error?.message || "Something went wrong!"}
          </p>
        </div>
      </div>
    );

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

          return (
            <li
              key={id}
              onClick={() => navi}
              className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              <Link to={`/rq/${id}`}>
              {/* Top Section */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                  Post #{id}
                </span>

                <span className="text-xs text-zinc-500">
                  React Query
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold leading-snug text-zinc-100 group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h2>

              {/* Divider */}
              <div className="w-full h-px bg-zinc-800 my-5"></div>

              {/* Body */}
              <p className="text-sm leading-relaxed text-zinc-400">
                {body}
              </p>

              {/* Bottom Section */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  Cached Query
                </span>

                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Read More →
                </button>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;