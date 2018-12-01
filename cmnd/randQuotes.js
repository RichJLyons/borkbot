const api = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
const fetch = require("node-fetch");

module.exports.run = async (bot,message,args) => {
  fetch(api)
    .then(res => res.json())
    .then(json => console.log(json));
}

module.exports.help={
  name: "randQuotes"
}
