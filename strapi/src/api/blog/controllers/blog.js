// @ts-nocheck
/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async create(ctx) {
    // Extract user ID from JWT token in the Authorization header
    const userId = ctx.state.user.id;
    console.log(userId);
    try {
      // Extract blog data from request body
      // @ts-ignore
      console.log("id", ctx.request.body);
      console.log("data", JSON.parse(ctx.request.body.data));
      const {
        blogTitle,
        blogDescription,
        categories,
        // @ts-ignore
      } = JSON.parse(ctx.request.body.data);

      //@ts-ignore
      console.log("data", JSON.parse(ctx.request.body.data));

      // @ts-ignore
      console.log("files", ctx.request.files["files.blogThumbnail"]);
      // @ts-ignore
      const blogThumbnail = ctx.request.files["files.blogThumbnail"];
      console.log("Blog: ", blogThumbnail);

      const blogImages = ctx.request.files["files.blogImages"];

      // Create the blog entry and associate the logged-in user
      const blog = await strapi.service("api::blog.blog").create({
        data: {
          blogTitle: blogTitle,
          blogDescription: blogDescription,
          categories: categories,
          user: userId, // Associate the user ID with the blog entry
        },
        files: {
          blogThumbnail: blogThumbnail,
          blogImages: blogImages,
        }, // Include the blogThumbnail field
      });

      console.log(blog); // Ensure that blogThumbnail is included in the logged blog object

      return blog;
    } catch (err) {
      // Handle errors appropriately
      ctx.throw(500, "Error creating blog entry", err);
    }
  },
}));
