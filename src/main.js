import { TooltipPlugin, ModalPlugin, ButtonPlugin } from 'bootstrap-vue'
import './assets/styles/main.sass'

export default function (Vue, { router, head, isClient }) {
  Vue.use(ModalPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(TooltipPlugin);

  if (isClient) {
    window.ScrollReveal = require('scrollreveal').default;
  }

  const description = 'Com o Bulldesk você tem automação de marketing e CRM em um lugar só. Faça suas campanhas de Marketing Digital em pouco tempo e acelere ao máximo seu processo de vendas. Menos gastos, Mais conversões. Menos softwares, mais performance.';

  head.htmlAttrs = { lang: 'pt-br' }

  head.meta.push({ name: 'og:type', content: 'website' });
  head.meta.push({ name: 'description', content: description });
  head.meta.push({ name: 'og:description', content: description });
  head.meta.push({ name: 'keywords', content: 'Automação de Marketing, CRM' });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  });
}
