const fs = require('fs');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassThroughCopy(src / css);

  eleventyConfig.addShortCode('component_dsd', function (name) {
    const fileContents = fs.readFileSync(
      `src/_includes/components/${name}.html`
    );
    return fileContents;
  });
};

return {
  dir: {
    input: 'src',
    output: 'public',
    pathPrefix: '/dashboard/',
  },
};
