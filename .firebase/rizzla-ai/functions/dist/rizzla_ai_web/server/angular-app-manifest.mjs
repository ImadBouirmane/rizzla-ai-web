
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/privacy"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/terms"
  },
  {
    "renderMode": 2,
    "route": "/faq"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19960, hash: '8a88232047964861b80e310bab3b3302e02cbb99b3041f7ef0125b3d89cda6d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17410, hash: '3cc39e9e9a674144f72e4fcd2c5e75933ad97358c57abdbc556617ea64f34935', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 39762, hash: 'fd0dae99196353604002e43c526c9cb990d036958dc80d899f19790868afb6e4', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58007, hash: 'ba7d19274d5a444591b0b13857ceea5eaabd04a8fadf6d1c751873a7b143be57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 40627, hash: 'ccc42373913a086e358a961ecd21212e82da9371f9c4fc8424ba8a643fc8b5fa', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'terms/index.html': {size: 40081, hash: '49978eb4a48e2606760aab046e6fa2884b5ee96798279cc22efa4a383eafdddc', text: () => import('./assets-chunks/terms_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 42738, hash: '900398fa79fa65d974044007e8043f162d29c69fa1f8021e01aca9f3eaf27e94', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'styles-HJUAP36Q.css': {size: 9878, hash: 'jAkqr8PbMqc', text: () => import('./assets-chunks/styles-HJUAP36Q_css.mjs').then(m => m.default)}
  },
};
