import { useEffect, useMemo, useState } from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { useInView } from "react-intersection-observer";

import toast from "react-hot-toast";

import { fetchPosts, deletePost, updatePost, createPost } from "../../API/CRUD-Practice-API";
import Loader from "../UI/Loader";
import SkeletonCard from "../UI/SkeletonCard";
import PostForm from "../UI/PostForm";
import PostCard from "../UI/PostCard";
import Modal from "../UI/Modal";


const TanStackFeaturesRich = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const { ref, inView } = useInView();

  // FETCH POSTS
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],

    queryFn: ({ pageParam = 1 }) =>
      fetchPosts(pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 12) {
        return undefined;
      }

      return allPages.length + 1;
    },
  });

  // AUTO INFINITE SCROLL
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  
  // CREATE POST
  const createMutation = useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      toast.success("Post created");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: () => {
      toast.error("Failed to create post");
    },
  });

  
  // UPDATE POST
  const updateMutation = useMutation({
    mutationFn: updatePost,

    onSuccess: () => {
      toast.success("Post updated");

      setEditingPost(null);

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: () => {
      toast.error("Failed to update post");
    },
  });

  
  // DELETE POST WITH OPTIMISTIC UPDATE
  const deleteMutation = useMutation({
    mutationFn: deletePost,

    onMutate: async (postId) => {
      await queryClient.cancelQueries({
        queryKey: ["posts"],
      });

      const previousPosts =
        queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (oldData) => {
        return {
          ...oldData,

          pages: oldData.pages.map((page) =>
            page.filter((post) => post.id !== postId),
          ),
        };
      });

      return { previousPosts };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(
        ["posts"],
        context.previousPosts,
      );

      toast.error("Delete failed");
    },

    onSuccess: () => {
      toast.success("Post deleted");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  // ======================================================
  // FILTER POSTS
  // ======================================================

  const filteredPosts = useMemo(() => {
    return (
      data?.pages
        ?.flat()
        ?.filter((post) =>
          post.title
            .toLowerCase()
            .includes(search.toLowerCase()),
        ) || []
    );
  }, [data, search]);

  // ======================================================
  // LOADING
  // ======================================================

  if (status === "pending") {
    return (
      <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-black p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  // ======================================================
  // ERROR
  // ======================================================

  if (status === "error") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <div className="mx-auto max-w-7xl p-8">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl font-black bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Infinite CRUD App
            </h1>

            <p className="mt-2 text-zinc-400">
              TanStack Query + Infinite Scroll + CRUD
            </p>
          </div>

          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[320px] rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none focus:border-blue-500"
          />
        </div>


        {/* EDIT Post Modal */}
        <Modal
          isOpen={isCreateModalOpen || !!editingPost} 
          onClose={() => {
            setIsCreateModalOpen(false);
            setEditingPost(null);
          }}
          title={editingPost ? "Edit Existing Post" : "Create New Post"}
        >
          <PostForm
            initialData={editingPost}
            isEditing={!!editingPost}
            onClose={() => {
              setIsCreateModalOpen(false);
              setEditingPost(null);
            }}
            onSubmit={(formData) => {
              if (editingPost) {
                updateMutation.mutate({ id: editingPost.id, ...formData });
              } else {
                createMutation.mutate(formData);
                setIsCreateModalOpen(false); // Close after create
              }
            }}
          />
        </Modal>

        {/* POSTS GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              post={post}
              onDelete={(id) =>
                deleteMutation.mutate(id)
              }
              onEdit={(post) => setEditingPost(post)}
            />
          ))}
        </div>

        {/* ================================================= */}
        {/* LOAD MORE */}
        {/* ================================================= */}

        {isFetchingNextPage && <Loader loadingMessage={"Loading"} />}

        <div ref={ref} className="h-20" />

        {!hasNextPage && (
          <div className="py-10 text-center text-zinc-500">
            No more posts
          </div>
        )}
      </div>
    </div>
  );
};

export default TanStackFeaturesRich;