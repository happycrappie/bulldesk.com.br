<style lang="sass">
  @import '../assets/styles/_variables.scss'

  .countdown-container
    text-align: center
    color: $white-gray

    h4
      font-size: 1rem
      font-weight: 400
      letter-spacing: 4.2px
      line-height: 25px
      text-transform: uppercase
      margin-bottom: 1rem

    .vuejs-countdown
      padding: 0
      margin: 0

    .vuejs-countdown li
      display: inline-block
      margin: 0 8px
      text-align: center
      position: relative
      padding: 1rem

    .vuejs-countdown li p
        margin: 0

    .vuejs-countdown li:after
      content: ":"
      position: absolute
      top: 40px
      right: -13px
      font-size: 2rem

    .vuejs-countdown li:first-of-type
      margin-left: 0


    .vuejs-countdown li:last-of-type
      margin-right: 0

    .vuejs-countdown li:last-of-type:after
      content: ""

    .vuejs-countdown .digit
      font-size: 2.5rem
      font-weight: 700
      letter-spacing: -0.6px
      line-height: 60px
      margin-bottom: 1rem
      border: 1.5px solid $white-gray
      border-radius: 30px
      min-width: 85px
      min-height: 85px
      padding: 1rem

      @media only screen and (min-width: map-get($grid-breakpoints, 'sm')) and (max-width: map-get($grid-breakpoints, 'lg2'))
        font-size: 2.2rem
        min-height: 75px
        min-width: 75px

      @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
        font-size: 2rem
        min-height: 75px
        min-width: 75px

    .vuejs-countdown .text
      margin-bottom: 0
      font-size: 1rem
      font-weight: 700
      letter-spacing: -0.21px
</style>

<template lang="pug">
  .countdown-container
    .container
      h4 FALTAM APENAS
      ul.vuejs-countdown
        li(v-if="days > 0")
          p.digit {{ days | twoDigits }}
          p.text {{ days > 1 ? 'dias' : 'dia' }}
        li
          p.digit {{ hours | twoDigits }}
          p.text {{ hours > 1 ? 'horas' : 'hora' }}
        li
          p.digit {{ minutes | twoDigits }}
          p.text min
        li
          p.digit {{ seconds | twoDigits }}
          p.text seg
</template>

<script>
let interval = null;

export default {
  props: {
    deadline: {
      type: String
    },
    end: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },

  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      diff: 0
    }
  },

  created () {
    let endTime = this.deadline ? this.deadline : this.end;

    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);

    if (! this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }

    interval = setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },

  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    }
  },

  watch: {
    now (value) {
      this.diff = this.date - this.now;

      if (this.diff <= 0 || this.stop){
          this.diff = 0;
          // Remove interval
          clearInterval(interval);
      }
    }
  },

  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1 ) {
        return '0' + value.toString()
      }

      return value.toString();
    }
  },

  destroyed() {
    clearInterval(interval);
  }
}
</script>
