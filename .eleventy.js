module.exports = function (cfg) {
  cfg.addWatchTarget("src/style.css");
  cfg.addPassthroughCopy("src/style.css");
  
  return {
    dir: {
      input: "src",
      output: "build"
    }
  }
};