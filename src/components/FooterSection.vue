<template>
  <footer>
    <div class="container footer-container">
      <div class="footer-info">
        <p>Copyright © 2022 Amadeus Hotels. All rights reserved.</p>
        <div class="company-address">
          <p>Amadeus IT Group</p>
          <p>C. Salvador de Madariaga, 1</p>
          <p>28027 Madrid</p>
          <p>Spain</p>
        </div>
      </div>
      
      <div class="footer-social">
        <p>Follow us on</p>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <p class="photo-credits">Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.footer-info {
  flex: 1;
}

.company-address {
  margin-top: 20px;
}

.footer-social {
  text-align: right;
}

.social-icons {
  margin: 15px 0;
}

.social-icon {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #333;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #666;
}

.photo-credits {
  font-size: 12px;
  color: #cccccc;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-social {
    text-align: left;
    margin-top: 30px;
  }
  
  .social-icon {
    margin: 0 10px 0 0;
  }
}
</style>