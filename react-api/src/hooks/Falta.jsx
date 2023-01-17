import axios from "axios";

const Endpoint = "http://127.0.0.1:8000/api";

// export const getPostById = async (postId) => {
//   const { data } = await axios.get(`${API}/posts/${postId}`);
//   return data;
// };

// export const getPosts = async () => {
//   const { data } = await axios.get(`${API}/posts`);
//   return data;
// };

// export const createNewPost = async (post) => {
//   const { data } = await axios.post(`${API}/posts`, post);
//   return data;
// };




export const getAllTienda= async () => {
  const {data} = await axios.get(`${Endpoint}/tiendas`);
  return data;
}


