<style lang="sass">
  html, body, main
    height: 100%
</style>

<template lang="pug">
  main
    slot
    Footer
</template>

<script>
  import Footer from '../components/Footer'

  export default {
    components: {
      Footer,
    },

    mounted () {
      this.setConversionLink();
    },

    methods: {
      setConversionLink () {
        const links = document.querySelectorAll('.google-conversion');

        var callback = (event) => {
          event.preventDefault();

          const redirect = () => {
            window.location = event.target.href || 'https://bulldesk.com.br/cadastro';
          };

          gtag('event', 'conversion', {
            send_to: 'AW-862908766/HoziCNjgrZ0BEN7iu5sD',
            event_callback: redirect,
          });

          setTimeout(redirect, 400);

          return false;
        };

        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener('click', callback);
        }
      }
    },
  }
</script>
