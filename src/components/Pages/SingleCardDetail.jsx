import { useParams } from "react-router";
import { fetchPost } from "../../API/Api-RQ";
import { useQuery } from "@tanstack/react-query";
import ErrorUI from "../UI/ErrorUI";
import Loader from "../UI/Loader";
import PostCard from "../UI/PostCard";

const SingleCardDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPost(id),
  });

  // Loading UI
  if (isLoading) return <Loader loadingMessage={"Loading"} />;

  // Error UI
  if (isError) return <ErrorUI error={error} />;

  const { title, body } = data;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <PostCard id={id} title={title} body={body} />
    </div>
  );
};
export default SingleCardDetail;