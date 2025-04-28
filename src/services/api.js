import axios from 'axios'

// TVMaze API
const tvmazeClient = axios.create({
  baseURL: 'https://api.tvmaze.com',
})

export const tvmazeApi = {
  searchShows(query) {
    return tvmazeClient.get(`/search/shows?q=${query}`)
      .then(response => response.data)
  },
  getShow(id) {
    return tvmazeClient.get(`/shows/${id}`)
      .then(response => response.data)
  }
}

// The Movie DB API - Uncomment and configure if you prefer to use this API
// const tmdbClient = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   params: {
//     api_key: 'YOUR_API_KEY_HERE', // You'll need to get an API key from themoviedb.org
//   },
// })
// 
// export const tmdbApi = {
//   searchMovies(query) {
//     return tmdbClient.get('/search/movie', {
//       params: { query }
//     })
//       .then(response => response.data.results)
//   },
//   getMovie(id) {
//     return tmdbClient.get(`/movie/${id}`)
//       .then(response => response.data)
//   }
// }