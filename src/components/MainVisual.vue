<template>
  <section class="main-visual">
    <div class="hero-image">
      <img src="https://via.placeholder.com/1920x800?text=Hero+Image" alt="Movie Library Hero Image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainVisual'
}
</script>

<style scoped>
.main-visual {
  padding: 0;
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .main-visual {
    height: 40vh;
    min-height: 300px;
  }
}
</style>