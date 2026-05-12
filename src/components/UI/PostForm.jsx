import { useState } from "react";

const PostForm = ({ initialData, onSubmit, onClose, isEditing = false }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [body, setBody] = useState(initialData?.body || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      return toast.error("All fields are required");
    }

    onSubmit({
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <h2 className="text-2xl font-bold">
        {isEditing ? "Edit Post" : "Create Post"}
      </h2>

      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-blue-500"
      />

      <textarea
        placeholder="Write something..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="min-h-35 w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-blue-500"
      />

      <div className="flex gap-3">
        <button className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
          {isEditing ? "Update Post" : "Create Post"}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl bg-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};


export default PostForm;
