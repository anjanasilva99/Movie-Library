<template>
  <section class="site-intro">
    <div class="container">
      <h1>MOVIE LIBRARY</h1>
      <p>Discover our extensive collection of classic films, blockbuster hits, and independent cinema. Browse through thousands of titles across all genres and eras, all available for your viewing pleasure.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SiteIntro'
}
</script>

<style scoped>
.site-intro {
  padding: 60px 0;
  text-align: center;
  background-color: #f0f0f0;
}

.site-intro h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.site-intro p {
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
}

@media (max-width: 768px) {
  .site-intro {
    padding: 40px 0;
  }
  
  .site-intro h1 {
    font-size: 28px;
  }
  
  .site-intro p {
    font-size: 16px;
  }
}
</style>