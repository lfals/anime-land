import axios from "axios";
import { arrayBuffer } from "stream/consumers";

const YTS_API_URL = "https://yts.mx/api/v2/list_movies.json";

const getAllMovies = (page: number) => {
  return axios
    .get(`${YTS_API_URL}/?page=${page}&genre=animation`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.data);

      return error;
    });
};

const getMovieDetails = (id: number) => {
  return axios.get(`${YTS_API_URL}/?movie_id=${id}`).then((response) => {
    return response.data;
  });
};

export { getAllMovies, getMovieDetails };
