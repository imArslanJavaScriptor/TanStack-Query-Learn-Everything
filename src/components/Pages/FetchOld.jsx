import { useEffect, useState } from "react";
import { fetchPosts } from "../../API/api-old";

const FetchOld = () => {
  // States for loading, error, and posts data
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch posts data function
    const getPostsData = async () => {
      try {
        const res = await fetchPosts();

        if (res.status === 200) {
          setPosts(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    getPostsData();
  }, []);

  // Loading UI
  if (isLoading)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-300 text-lg animate-pulse">
          Loading posts...
        </p>
      </div>
    );

  // Error UI
  if (isError)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-red-400 text-lg font-medium">
          Something went wrong!
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-zinc-100">
          Traditional Fetching
        </h1>

        <p className="text-zinc-400 mt-3">
          Fetching API data using useEffect + useState
        </p>
      </div>

      {/* Posts */}
      <ul className="max-w-5xl mx-auto space-y-6">
        {posts?.map((curElem) => {
          const { id, title, body } = curElem;

          return (
            <li
              key={id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300"
            >
              {/* ID */}
              <span className="text-xs text-zinc-500">
                Post #{id}
              </span>

              {/* Title */}
              <h2 className="text-xl font-semibold mt-2 text-zinc-100">
                {title}
              </h2>

              {/* Body */}
              <p className="text-zinc-400 mt-3 leading-relaxed">
                {body}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchOld;