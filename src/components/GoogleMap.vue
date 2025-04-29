<template>
  <div class="google-map">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.020749431541!2d-3.6606720236898225!3d40.436846271708906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2sus!4v1682252667447!5m2!1sen!2sus" 
      width="100%" 
      height="550" 
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