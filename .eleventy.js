module.exports = (config) => {
  // config.addPassthroughCopy({'src/_includes/assets/css/main.min.css': 'css/main.min.css'});
  config.addPassthroughCopy({ "uploads": "uploads" });
  // config.setFrontMatterParsingOptions({
  //   excerpt: true,
  //   excerpt_separator: "<!-- excerpt -->",
  // });
  // config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);

  config.addWatchTarget('_site/assets/*.css');
  config.setBrowserSyncConfig({
    files: ['_site/assets/*.css']
  });

  return {
    passthroughFileCopy: true,
    // dir: {
    //   input: "./src",
    //   output: "./build",
    // },
  };
};

const pluginSass = require("eleventy-plugin-sass");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
};