/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
*/

import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import reusableComponents from "eleventy-plugin-reusable-components";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default {
  /**
   * Eleventy Image plugin
   * https://www.11ty.dev/docs/plugins/image/
   */
  async image (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      outputDir: '../public/assets/images',
      urlPath: '/assets/images/',
      extensions: 'html',
      formats: ['auto'],

      // Attributes assigned on <img> override these values.
      defaultAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
    });
  },

  /**
   * Get ZeroPoint Reusable Components plugin
   * https://github.com/mwdelaney/eleventy-plugin-reusable-components
   */
  async reusableComponents (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(reusableComponents, {
      componentsDir: "src/assets/components/*.njk"
    });
  },

  /**
   * Syntax Highlight plugin
   * https://www.11ty.dev/docs/plugins/syntaxhighlight/
   */
  syntaxHighlight: async function (eleventyConfig) {
    // Add plugin to eleventyConfig
    eleventyConfig.addPlugin(syntaxHighlight);
  },
};
