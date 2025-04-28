<template>
  <div class="movie-card">
    <div class="movie-image">
      <img :src="movie.image" :alt="movie.name">
      <button class="remove-btn" @click="$emit('remove')">✕</button>
    </div>
    <h3>{{ movie.name }}</h3>
    <p>{{ movie.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  emits: ['remove']
}
</script>

<style scoped>
.movie-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.movie-card h3 {
  padding: 15px 15px 5px;
  font-size: 18px;
}

.movie-card p {
  padding: 0 15px 15px;
  color: #666;
  font-size: 14px;
}
</style>