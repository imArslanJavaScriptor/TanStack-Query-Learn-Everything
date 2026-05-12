const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <div className="h-6 bg-zinc-700 rounded w-2/3 mb-4" />

      <div className="space-y-3">
        <div className="h-4 bg-zinc-700 rounded" />
        <div className="h-4 bg-zinc-700 rounded" />
        <div className="h-4 bg-zinc-700 rounded w-5/6" />
      </div>

      <div className="flex gap-3 mt-6">
        <div className="h-10 w-24 bg-zinc-700 rounded-xl" />
        <div className="h-10 w-24 bg-zinc-700 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonCard;
