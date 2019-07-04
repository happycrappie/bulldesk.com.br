export default {
  conversionCallback: function(event, location = null) {
    event.preventDefault();

    const redirect = () => {
      window.location = location || event.target.href || 'https://bulldesk.com.br/cadastro';
    };

    gtag('event', 'conversion', {
      send_to: 'AW-862908766/HoziCNjgrZ0BEN7iu5sD',
      event_callback: redirect,
    });

    setTimeout(redirect, 1000);

    return false;
  }
}
