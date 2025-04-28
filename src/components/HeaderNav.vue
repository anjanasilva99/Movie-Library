<template>
  <header>
    <div class="container header-container">
      <div class="logo">
         <img src="@/assets/logos/Logo-White.svg" alt="Logoipsum">
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Screens</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Movie Library</a></li>
          <li><a href="#">Location & Contact</a></li>
        </ul>
      </nav>
      
      <!-- Hamburger Menu -->
      <div class="hamburger" @click="toggleMenu">
        <i :class="['fas', menuOpen ? 'fa-times' : 'fa-bars']"></i>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ active: menuOpen }">
        <ul>
          <li><a href="#" @click="closeMenu">Home</a></li>
          <li><a href="#" @click="closeMenu">Our Screens</a></li>
          <li><a href="#" @click="closeMenu">Schedule</a></li>
          <li><a href="#" @click="closeMenu">Movie Library</a></li>
          <li><a href="#" @click="closeMenu">Location & Contact</a></li>
          <li><a href="#" @click="closeMenu">Gallery</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
header {
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.desktop-nav ul {
  display: flex;
  list-style: none;
}

.desktop-nav ul li {
  margin-left: 20px;
}

.desktop-nav ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  padding-bottom: 5px;
}

.desktop-nav ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.3s ease;
}

.desktop-nav ul li a:hover::after,
.desktop-nav ul li a:focus::after,
.desktop-nav ul li a.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: #000;
  padding: 20px;
  z-index: 99;
}

.mobile-menu.active {
  display: block;
}

.mobile-menu ul {
  list-style: none;
}

.mobile-menu ul li {
  margin-bottom: 15px;
}

.mobile-menu ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 992px) {
  .desktop-nav {
    display: none;
  }
  
  .hamburger {
    display: block;
  }
}
</style>