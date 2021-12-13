const request = require("request");
const cheerio = require("cheerio");

exports.handler = async (event, context) => {
  let temp = [];
  request(
    "http://162.12.215.254/Data/Movies/Hollywood/2016_2017/",
    (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        $("a").each(function () {
          let text = $(this).text();
          let link = $(this).attr("href");
          temp.push({
            movie: text,
            link: link,
          });
        });
        console.log(temp);
      }
    }
  );
};
