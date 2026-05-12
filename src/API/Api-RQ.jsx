import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchPosts = async (limit) => {
  try {
    const response = await api.get(`/posts?_page=1&_per_page=${limit}`);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
