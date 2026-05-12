import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const fetchPosts = () => { 
  return api.get("/posts")
}