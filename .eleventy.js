module.exports = (config) => {
  // config.addPassthroughCopy({'src/_includes/assets/css/main.min.css': 'css/main.min.css'});
  config.addPassthroughCopy({ "src/uploads": "uploads" });

  config.addWatchTarget("./src/sass/");

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
        input: "src",
        output: "_site",
    }
};
};