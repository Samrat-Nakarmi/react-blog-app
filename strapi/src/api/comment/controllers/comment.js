// @ts-nocheck
"use strict";

/**
 * comment controller
 */

//@ts-nocheck
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  async create (ctx) {
    // Extract user ID from JWT token in the Authorization header
    const userId = ctx.state.user.id;

    try {
      console.log("Body: ", ctx.request.body);
      // @ts-ignore
      console.log("Data: ", ctx.request.body.data);

      // @ts-ignore
      const { content, blog } = ctx.request.body.data;

      const comment = await strapi.service("api::comment.comment").create({
        data: {
          content: content,
          blog: blog,
          user: userId,
        },
      });

      return comment;
    } catch (error) {
      ctx.throw(500, "Error creating comment", error);
    }
  },
}));
