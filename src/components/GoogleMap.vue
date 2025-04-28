<template>
  <div class="google-map">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.3382976917426!2d-3.628076684595384!3d40.44727607936138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422953c98ef087%3A0x6099dcfc6ac9bbd6!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2sus!4v1651160151092!5m2!1sen!2sus" 
      width="100%" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap'
}
</script>

<style scoped>
.google-map {
  flex: 1;
  min-height: 300px;
}
</style>