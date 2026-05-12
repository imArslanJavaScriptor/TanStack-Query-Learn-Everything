import { Link } from "react-router-dom";

const PostCard = ({ post, onDelete, onEdit, id, title, body }) => {
  return (
    <div className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-5 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between">
      <div>
        {/* Top Section */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
            Post #{id}
          </span>

          <span className="text-xs text-zinc-500">React Query</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug text-zinc-100 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800 my-5"></div>

        {/* Body */}
        <p className="text-sm leading-relaxed text-zinc-400">{body}</p>
      </div>

      {/* Bottom Section */}

      <div className="mt-6 flex gap-3 justify-between w-full">
        <Link
          to={`/fetch-with-tanstack-query/${id}`}
          className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-6 py-3 text-xs font-medium text-blue-400"
        >
          Card Detail
        </Link>
        {onDelete && onEdit && (
          // Edit Delete 
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onEdit(post)}
              className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-6 py-3 text-xs font-medium text-green-400 cursor-pointer"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => onDelete(post.id)}
              className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-6 py-1 text-xs font-medium text-red-400 cursor-pointer"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;