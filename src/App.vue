<template>
  <div class="app">
    <HeaderNav />
    <main>
      <MainVisual />
      <SiteIntro />
      <section class="movie-section">
        <div class="container">
          <h2>Collect your favourites</h2>
          <SearchMovie @add-movie="addMovie" />
          <MovieGrid 
            :movies="selectedMovies" 
            @remove-movie="removeMovie" 
          />
        </div>
      </section>
      <section class="contact-section">
        <div class="container contact-container">
          <ContactForm />
          <GoogleMap />
        </div>
      </section>
    </main>
    <FooterSection />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import MainVisual from './components/MainVisual.vue'
import SiteIntro from './components/SiteIntro.vue'
import SearchMovie from './components/SearchMovie.vue'
import MovieGrid from './components/MovieGrid.vue'
import ContactForm from './components/ContactForm.vue'
import GoogleMap from './components/GoogleMap.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    MainVisual,
    SiteIntro,
    SearchMovie,
    MovieGrid,
    ContactForm,
    GoogleMap,
    FooterSection
  },
  data() {
    return {
      selectedMovies: [
        {
          id: 1,
          name: 'Batman Returns',
          summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
          image: 'https://via.placeholder.com/300x450?text=Batman+Returns'
        },
        {
          id: 2,
          name: 'Wild Wild West',
          summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
          image: 'https://via.placeholder.com/300x450?text=Wild+Wild+West'
        },
        {
          id: 3,
          name: 'The Amazing Spiderman',
          summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…',
          image: 'https://via.placeholder.com/300x450?text=The+Amazing+Spiderman'
        }
      ]
    }
  },
  methods: {
    addMovie(movie) {
      // Check if movie already exists in the grid
      const exists = this.selectedMovies.some(m => m.id === movie.id)
      if (!exists) {
        this.selectedMovies.push(movie)
      }
    },
    removeMovie(movieId) {
      this.selectedMovies = this.selectedMovies.filter(m => m.id !== movieId)
    }
  }
}
</script>

<style>
.movie-section {
  padding: 60px 0;
  background-color: #f7f7f7;
}

.movie-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}

.contact-section {
  padding: 60px 0;
  background-color: #fff;
}

.contact-container {
  display: flex;
  gap: 40px;
}

@media (max-width: 992px) {
  .contact-container {
    flex-direction: column;
  }
}
</style>
