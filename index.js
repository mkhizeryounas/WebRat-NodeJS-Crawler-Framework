const rp = require("request-promise");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

var $ = (jQuery = require("jquery")(window));

async function crawler() {
  let url = "https://beta.zameen.com/Plots/Lahore_DHA_Defence-9-1.html";
  let content = await rp(url);
  console.log(
    ".listig-card-outter",
    $(content).find(".listig-card-outter").length
  );
}

crawler();
