import { TooltipPlugin, ModalPlugin, ButtonPlugin } from 'bootstrap-vue'
import Helpers from './shared/helpers'
import './assets/styles/main.sass'

export default function (Vue, { router, head, isClient }) {
  Vue.use(ModalPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(TooltipPlugin);

  Vue.filter('date', Helpers.convertDate);

  if (isClient) {
    window.ScrollReveal = require('scrollreveal').default;
  }

  const description = 'Com o Bulldesk você tem automação de marketing e CRM em um lugar só. Faça suas campanhas de Marketing Digital em pouco tempo e acelere ao máximo seu processo de vendas. Menos gastos, Mais conversões. Menos softwares, mais performance.';

  head.htmlAttrs = { lang: 'pt-br' }

  head.meta.push({ key: 'type', name: 'og:type', content: 'website' });
  head.meta.push({ key: 'description', name: 'description', content: description });
  head.meta.push({ key: 'og:description', name: 'og:description', property: description });
  head.meta.push({ key: 'og:image', name: 'og:image', property: 'https://app.bulldesk.com.br/build/images/og.jpg' });
  head.meta.push({ key: 'og:locale', property: 'og:locale', content: 'pt_BR'}),
  head.meta.push({ name: 'keywords', content: 'Automação de Marketing, CRM' });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  });

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://bulldesk.com.br' + to.path,
    })

    next()
  })
}
