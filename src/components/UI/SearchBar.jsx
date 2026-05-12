import React from "react";

const SearchBar = () => {
  const filteredPosts = data?.pages
    ?.flat()
    ?.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-8 p-4 rounded-2xl bg-zinc-900 border border-zinc-700"
    />
  );
};

export default SearchBar;
