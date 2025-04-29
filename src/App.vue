<template>
  <div class="app">
    <HeaderNav />
    <main>
      <MainVisual />
      <SiteIntro />
      <section id="movie-section" class="movie-section">
        <div class="container">
          <h2>Collect your favourites</h2>
          <SearchMovie @add-movie="addMovie" />
          <MovieGrid 
            :movies="selectedMovies" 
            @remove-movie="removeMovie" 
          />
        </div>
      </section>
      <section id="contact-section" class="contact-section">
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
          summary: 'When a corrupt businessman and the grotesque Penguin plot to take control of Gotham City, only Batman can stop them, while the mysterious Catwoman has her own agenda...',
          image: require('@/assets/images/Batman.jpg')
        },
        {
          id: 2,
          name: 'Wild Wild West',
          summary: 'Two gunslinging secret agents team up to protect President Grant and the United States from a diabolical inventor with a steampunk weapon in this action-comedy western...',
          image: require('@/assets/images/Wild-West.jpg')
        },
        {
          id: 3,
          name: 'The Amazing Spiderman',
          summary: "Peter Parker finds a clue that might help him understand why his parents disappeared when he was young, which leads him to Oscorp and his father's former partner...",
          image: require('@/assets/images/Spiderman.jpg')
        }
      ]
    }
  },
  methods: {
    addMovie(movie) {
      // Check if movie already exists in the grid
      const exists = this.selectedMovies.some(m => m.id === movie.id)
      if (!exists) {
        this.selectedMovies.unshift(movie)
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
  background-color: #1a1a1a;
  color: #ffffff;
}

.movie-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #ffffff;
}

.contact-section {
  padding: 60px 0;
  background-color: #000000;
  color: #ffffff;
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