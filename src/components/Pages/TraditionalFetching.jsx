import { useEffect, useState } from "react";
import { fetchPosts } from "../../API/api-old";
import Loader from "../UI/Loader";
import ErrorUI from "../UI/ErrorUI";
import PostCard from "../UI/PostCard";

const TraditionalFetching = () => {
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
  if (isLoading) return <Loader loadingMessage={"Loading"}/>

  // Error UI
  if (isError) return <ErrorUI/>

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
      <ul className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
        {posts?.map((curElem) => {
          const { id, title, body } = curElem;

          return (
           <PostCard id={id} title={title} body={body}  />
          );
        })}
      </ul>
    </div>
  );
};

export default TraditionalFetching;