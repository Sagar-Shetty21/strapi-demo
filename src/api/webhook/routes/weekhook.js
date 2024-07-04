'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/webhook/cashfree',
      handler: 'webhook.cashfree',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/webhook/whatsapp',
      handler: 'webhook.whatsapp',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/webhook/whatsapp',
      handler: 'webhook.whatsapp',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
