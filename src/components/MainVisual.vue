<template>
  <section class="main-visual">
    <div class="hero-video">
      <video 
        autoplay 
        muted 
        loop 
        poster="@/assets/images/Header-Image.jpg"
      >
        <source src="@/assets/videos/Header Video.mp4" type="video/mp4">
        <img src="@/assets/images/Header-Image.jpg" alt="Movie Library Hero Image" class="fallback-image">
      </video>
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

.hero-video {
  width: 100%;
  height: 100%;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fallback-image {
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