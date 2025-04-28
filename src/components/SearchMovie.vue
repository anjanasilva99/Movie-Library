<template>
  <div class="search-container">
    <h3>Search title and add to grid</h3>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search for movies..." 
        @input="searchMovies"
      >
    </div>
    
    <div class="search-results" v-if="searchResults.length > 0">
      <div 
        v-for="movie in searchResults" 
        :key="movie.id" 
        class="search-result-item"
        @click="selectMovie(movie)"
      >
        <div class="result-image">
          <img :src="movie.image" :alt="movie.name">
        </div>
        <div class="result-info">
          <h4>{{ movie.name }}</h4>
          <p>{{ movie.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tvmazeApi } from '../services/api'

export default {
  name: 'SearchMovie',
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searchTimeout: null
    }
  },
  methods: {
    searchMovies() {
      // Clear previous timeout
      clearTimeout(this.searchTimeout)
      
      // Set new timeout to avoid making too many API calls
      this.searchTimeout = setTimeout(async () => {
        if (this.searchQuery.trim().length > 0) {
          try {
            const response = await tvmazeApi.searchShows(this.searchQuery)
            this.searchResults = response.map(item => ({
              id: item.show.id,
              name: item.show.name,
              summary: item.show.summary ? 
                this.stripHtmlTags(item.show.summary).substring(0, 100) + '…' : 
                'No description available',
              image: item.show.image ? 
                item.show.image.medium : 
                'https://via.placeholder.com/300x450?text=No+Image'
            }))
          } catch (error) {
            console.error('Error searching movies:', error)
            this.searchResults = []
          }
        } else {
          this.searchResults = []
        }
      }, 500)
    },
    selectMovie(movie) {
      this.$emit('add-movie', movie)
      this.searchQuery = ''
      this.searchResults = []
    },
    stripHtmlTags(html) {
      return html.replace(/<[^>]*>?/gm, '')
    }
  }
}
</script>

<style scoped>
.search-container {
  margin-bottom: 30px;
}

.search-container h3 {
  text-align: center;
  margin-bottom: 20px;
}

.search-box {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.search-results {
  position: absolute;
  max-width: 600px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 10;
}

.search-result-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.search-result-item:hover {
  background-color: #f7f7f7;
}

.result-image {
  width: 60px;
  margin-right: 15px;
}

.result-image img {
  width: 100%;
  height: auto;
  border-radius: 3px;
}

.result-info h4 {
  margin-bottom: 5px;
}

.result-info p {
  font-size: 14px;
  color: #666;
}
</style>