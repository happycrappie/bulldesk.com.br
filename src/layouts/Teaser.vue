<style lang="sass">
  @import '../assets/styles/_variables.scss'

  html, body
    height: 100%

  main.teaser-layout
    height: 100%
    overflow-y: auto
    background-image: url(~@/assets/images/teaser-footer-bg.png), url(~@/assets/images/teaser-bg.png)
    background-size: 110% 130%, 100% 100%
    background-position: -8rem 10rem, 0rem 0rem
    background-repeat: no-repeat

    @media only screen and (min-width: map-get($grid-breakpoints, 'lg2')) and (max-width: map-get($grid-breakpoints, 'xl'))
      background-position: -6rem 10rem, 0rem 0rem

    @media only screen and (min-width: map-get($grid-breakpoints, 'md')) and (max-width: map-get($grid-breakpoints, 'lg2'))
      background-position: -4rem 10rem, 0rem 0rem

    @media only screen and (min-width: map-get($grid-breakpoints, 'sm')) and (max-width: map-get($grid-breakpoints, 'md'))
      background-position: -3rem 10rem, 0rem 0rem

    @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
      background-position: -2rem 10rem, 0rem 0rem
</style>

<template lang="pug">
  main.teaser-layout
    slot
</template>
