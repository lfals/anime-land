import axios from "axios";

const YTS_API_URL = "https://yts.mx/api/v2/";

const getAllMovies = (page: number) => {
  return axios
    .get(`${YTS_API_URL}list_movies.json?page=${page}&genre=animation`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.data);

      return error;
    });
};

const getMovieDetails = (id: string) => {
  console.log("getDetails");

  return axios
    .get(`${YTS_API_URL}movie_details.json?movie_id=${id}`)
    .then((response) => {
      return response;
    });
};

export { getAllMovies, getMovieDetails };
