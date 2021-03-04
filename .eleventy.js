module.exports = (config) => {
  // config.addPassthroughCopy({'src/_includes/assets/css/main.min.css': 'css/main.min.css'});
  config.addPassthroughCopy({ "src/images": "images" });

  config.addWatchTarget("./src/sass/");

  // posts collection
    // eleventyConfig.addCollection("posts", function(collection) {
    // return collection.getFilteredByGlob("./src/blog/*.md").reverse();
  // });

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
        input: "src",
        output: "_site",
    }
};
};