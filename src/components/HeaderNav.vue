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
          <li class="menu-icon" @click="toggleSidebar">
            <img src="@/assets/icons/Menu White.svg" alt="Menu">
          </li>
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
      
      <!-- Gallery Sidebar -->
      <div class="gallery-sidebar" :class="{ active: sidebarOpen }">
        <div class="sidebar-close">
          <span class="close-btn" @click="toggleSidebar">
            <img src="@/assets/icons/Close White.svg" alt="Close" class="close-icon">
            <!-- If you don't have this icon, you can use "&times;" instead -->
          </span>
        </div>
        <div class="sidebar-content">
          <div class="sidebar-menu-items">
            <div class="sidebar-menu-item">
              <a href="#">GALLERY</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Overlay when sidebar is open -->
      <div class="overlay" v-if="sidebarOpen" @click="toggleSidebar"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      menuOpen: false,
      sidebarOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      // Add body class to prevent scrolling when sidebar is open
      if (this.sidebarOpen) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
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
  align-items: center;
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

.menu-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-icon img {
  height: 20px;
  width: auto;
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

/* Gallery Sidebar Styles - Updated to match design */
.gallery-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: #000;
  z-index: 1000;
  transition: right 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

.gallery-sidebar.active {
  right: 0;
}

.sidebar-close {
  position: absolute;
  top: 20px;
  right: 20px;
}

.close-btn {
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-icon {
  width: 16px;
  height: 16px;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 40px;
}

.sidebar-menu-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-menu-item {
  padding: 10px 0;
}

.sidebar-menu-item a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: opacity 0.3s ease;
  display: block;
}

.sidebar-menu-item a:hover {
  opacity: 0.8;
}

/* Overlay style when sidebar is open */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 999;
}

/* For preventing scrolling when sidebar is open */
:global(body.no-scroll) {
  overflow: hidden;
}

/* Hide sidebar on mobile */
@media (max-width: 992px) {
  .desktop-nav {
    display: none;
  }
  
  .hamburger {
    display: block;
  }
  
  .menu-icon {
    display: none;
  }
  
  .gallery-sidebar {
    width: 100%;
    right: -100%;
  }
}
</style>