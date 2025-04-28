<template>
  <div class="movie-grid">
    <movie-card 
      v-for="movie in movies" 
      :key="movie.id" 
      :movie="movie"
      @remove="$emit('remove-movie', movie.id)"
    />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  name: 'MovieGrid',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  emits: ['remove-movie']
}
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

@media (max-width: 992px) {
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .movie-grid {
    grid-template-columns: 1fr;
  }
}
</style>