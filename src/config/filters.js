/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
*/

import markdownIt from 'markdown-it';
import fs from 'fs';

export default {
  /**
   * Markdown filter
   * Converts Markdown content to HTML.
  */
  async markdown(eleventyConfig) {
    const options = {
      html: true,
      breaks: true,
      linkify: true,
    };
    const markdownLib = markdownIt(options);
    eleventyConfig.addFilter('markdown', (value) => {
      return markdownLib.render(value);
    });
  },

  // Filter to read and extract frontmatter from the original file
  async frontmatter(eleventyConfig) {
    eleventyConfig.addFilter("getFrontmatter", function(item) {
      if (!item || !item.inputPath) {
        return '';
      }

      try {
        // Read the original file content
        const fileContent = fs.readFileSync(item.inputPath, 'utf8');

        // Extract frontmatter (content between the first two --- markers)
        const frontmatterMatch = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);

        if (frontmatterMatch) {
          // Return the frontmatter with the --- delimiters
          return `---\n${frontmatterMatch[1]}\n---`;
        }

        return 'No frontmatter found';
      } catch (error) {
        return `Error reading file: ${error.message}`;
      }
    });
  },
};
