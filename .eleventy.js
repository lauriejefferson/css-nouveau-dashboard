const fs = require('fs');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');

  eleventyConfig.addShortcode('component_dsd', function (name) {
    const fileContents = fs.readFileSync(
      `src/_includes/components/${name}.html`
    );
    return fileContents;
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
      layouts: '_layouts',
      pathPrefix: '/dashboard/',
    },
  };
};
