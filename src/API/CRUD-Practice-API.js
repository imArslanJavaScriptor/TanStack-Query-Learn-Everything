import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// ======================================================
// FETCH POSTS WITH PAGINATION
// ======================================================

export const fetchPosts = async (page = 1) => {
  const response = await api.get(
    `/posts?_page=${page}&_per_page=12`,
  );

  /**
   * json-server v1.0 response:
   * {
   *   data: [...],
   *   first: 1,
   *   prev: null,
   *   next: 2,
   *   last: 9,
   *   items: 100
   * }
   */

  return response.data.data;
};

// ======================================================
// CREATE POST
// ======================================================

export const createPost = async (newPost) => {
  const response = await api.post("/posts", {
    ...newPost,
  });

  return response.data;
};

// ======================================================
// DELETE POST
// ======================================================

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);

  return response.data;
};

// ======================================================
// UPDATE POST
// ======================================================

export const updatePost = async ({
  id,
  title,
  body,
}) => {
  const response = await api.patch(`/posts/${id}`, {
    title,
    body,
  });

  return response.data;
};