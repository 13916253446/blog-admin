let config = require("./build/config.js");

module.exports={
  "plugins": { 
    "postcss-import": {}, 
    "postcss-url": {},
    "autoprefixer": {
      "browsers": config.browsers
    }     
  }
}