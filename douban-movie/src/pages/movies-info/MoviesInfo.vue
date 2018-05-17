<template>
  <div class="movies-info">
    <movie-in-theater></movie-in-theater>
    <coming-movies></coming-movies>
  </div>
</template>

<script>
  import MovieInTheater from '../in-theater/MovieInTheater.vue'
  import ComingMovies from '../coming-movies/ComingMovies.vue'
  export default {
    name: 'MoviesInfo',
    components: {
      MovieInTheater,
      ComingMovies
    }
  }
</script>

<style scoped>

</style>