'use strict';

const crypto = require('crypto');

/**
 * A set of functions called "actions" for `webhook`
 */
module.exports = {
  cashfree: async (ctx, next) => {
    // const signature = ctx.request.headers['x-webhook-signature']; 
    const payload = ctx.request.body;

    // Verify the signature (if applicable)
    // if (!verifyCashfreeSignature(signature, payload)) {
    //   return ctx.throw(400, 'Invalid signature');
    // }

    // Process the webhook payload
    try {
      // Handle the payload according to your business logic
      await strapi.entityService.create('api::webhook-response.webhook-response',{
        data:{
          response: payload
        }
      })

      ctx.status = 200;
      ctx.send({ message: 'Webhook received' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      ctx.throw(500, 'Internal server error');
    }
  }
};

function verifyCashfreeSignature(signature, payload) {
  // Implement your signature verification logic here
  // Example using HMAC SHA256:
  const secret = 'secret-key'; // Replace with your actual secret key
  const hash = crypto.createHmac('sha256', secret)
                     .update(JSON.stringify(payload))
                     .digest('hex');
  
  return hash === signature; // Replace with the appropriate comparison
}
