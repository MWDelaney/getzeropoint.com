
export default {
  eleventyComputed: {
    layout: "component.njk",
    permalink: (data) => {
      // if (process.env.ELEVENTY_ENV === 'production') {
      //   return false;
      // }
      // Let individual file/frontmatter control permalink in non-production
      return '/block-library/' + data.page.fileSlug + '/';
    },
  },
};
