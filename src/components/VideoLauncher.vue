<style lang="sass">
  @import '../assets/styles/_variables.scss'

  .video-launcher
    position: relative
    cursor: pointer

    img
      display: block
      max-width: 100%
      height: auto

    span
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

      svg
        width: 56px
        height: auto

        path
          fill: #fff
          stroke: none
          transition: all 0.2s linear

    &:hover
      svg
        path
          fill: $green

  #video-modal
    .modal-content
      background: none

    .modal-body
      width: 100%
      padding: 0 0 56.25%
      background: none

      iframe
        position: absolute
        display: block
        width: 100%
        height: 100%
</style>

<template lang="pug">
  .video-launcher(v-b-modal.video-modal)
    g-image(:src='image')
    span.d-flex.align-items-center.justify-content-center
      svg(xmlns="http://www.w3.org/2000/svg" width="55.863" height="64.051" viewBox="0 0 55.863 64.051")
        path(d="M62.7 22.308a2.01 2.01 0 1 0-2.127 3.41 7.433 7.433 0 0 1 0 12.614L27.61 58.884a7.433 7.433 0 0 1-11.365-6.307v-41.1a7.433 7.433 0 0 1 11.365-6.31L46.8 17.131a2.01 2.01 0 1 0 2.127-3.41L29.737 1.757a11.451 11.451 0 0 0-17.511 9.717v41.1a11.309 11.309 0 0 0 5.895 10.013 11.31 11.31 0 0 0 11.616-.3L62.7 41.742a11.452 11.452 0 0 0 0-19.434z" transform="translate(-12.226)")/

    b-modal#video-modal(centered hide-header="true" hide-footer="true" size="xl")
      iframe(width="560" height="315" :src="'https://www.youtube.com/embed/'+ videoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
  export default {
    props: {
      videoID: String,
      image: String
    }
  }
</script>
