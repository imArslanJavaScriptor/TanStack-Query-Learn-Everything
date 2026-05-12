import { useParams } from "react-router-dom";

const FetchCardDetails = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <li
      key={id}
      onClick={() => navi}
      className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
    >
        {/* Top Section */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
            Post #{id}
          </span>

          <span className="text-xs text-zinc-500">React Query</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug text-zinc-100 group-hover:text-blue-400 transition-colors duration-300">
          {id.title}
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800 my-5"></div>

        {/* Body */}
        <p className="text-sm leading-relaxed text-zinc-400">{id.body}</p>

        {/* Bottom Section */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-zinc-500">Cached Query</span>

          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Read More →
          </button>
        </div>
    </li>
  );
};

export default FetchCardDetails;
