const PostCard = ({ post, onDelete, onEdit }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="mb-4 text-2xl font-bold capitalize">{post.title}</h2>

        <p className="line-clamp-4 text-zinc-400">{post.body}</p>

        <div className="mt-6 flex gap-3">
          <button
          type="button"
            onClick={() => onEdit(post)}
            className="rounded-xl bg-blue-600 px-4 py-2 hover:bg-blue-700 transition"
          >
            Edit
          </button>

          <button
          type="button"
            onClick={() => onDelete(post.id)}
            className="rounded-xl bg-red-600 px-4 py-2 hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
