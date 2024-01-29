import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/trending/movie/day?api_key=fc71d2bf79fa505d782ee19e1005b2a0',
});
// const API_KEY = 'fc71d2bf79fa505d782ee19e1005b2a0';

// const URL_TREND = 'https://api.themoviedb.org/3/trending/movie/day';
// const URL_DETAILS = 'https://api.themoviedb.org/3/movie/';
// const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

// const API_KEY = 'fc71d2bf79fa505d782ee19e1005b2a0';

const params = new URLSearchParams({
  language: 'en-US',
  page: '1',
});

//   return axios.get(`${URL_TREND}?${params}`).then(({ data }) => data);

export const getAllPosts = () => {
  return instance.get(``);
};

export const getPostById = id => {
  return instance.get(`/${id}`);
};

export const searchPosts = (q, _page = 1) => {
  return instance.get('/', {
    params: {
      q,
      _limit: 6,
      _page,
    },
  });
};
