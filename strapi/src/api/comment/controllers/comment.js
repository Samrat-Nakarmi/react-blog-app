"use strict";

/**
 * comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  async create(ctx) {
    console.log("User: ", ctx.state.user);
    //   const { email, username } = ctx.state.user;
    //   try {
    //     const body = ctx.request.body;
    //     if (!body || typeof body !== 'object') {
    //       ctx.response.status = 400;
    //       return { error: 'Request body is missing or invalid' };
    //     }

    //     const res = await strapi.service("api::comment.comment").create({
    //       data: {
    //         ...body, // Explicitly type body as Record<string, any>
    //         email,
    //         username,
    //       },
    //     });

    //     return res;
    //   } catch (error) {
    //     ctx.response.status = 500;
    //     return error;
    //   }
  },
}));
