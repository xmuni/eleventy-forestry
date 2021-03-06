module.exports = (eleventyConfig) => {
    // config.addPassthroughCopy({'src/_includes/assets/css/main.min.css': 'css/main.min.css'});
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });

    eleventyConfig.addWatchTarget("./src/sass/");

    const outdent = require("outdent")({ newline: " " });

    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.setLibrary('md', markdownLib)
      
    eleventyConfig.addShortcode('youtube', require('./src/shortcodes/youtube'));

    // Remove indentation from templates in order to avoid markdown adding <code><pre> garbage
    // eleventyConfig.addShortcode("alsoGoodShortcode", function() {
    //     return outdent`This will not be a code block in a markdown file.`;
    // });

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