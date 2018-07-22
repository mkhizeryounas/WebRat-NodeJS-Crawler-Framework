const rp = require("request-promise");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));
$.fetch = rp;
var chalk = require("chalk");

async function crowlerInit() {
  let filePath = process.argv.slice(2);
  try {
    if (!filePath.length) throw "File path required";
    let mod = require(`./${filePath[0]}`);
    await mod($, function(err, data) {
      try {
        if (err) throw err;
        console.log(chalk.green("Callback Success:"), data);
      } catch (err) {
        console.log(chalk.red("Callback Error:"), err);
      }
    });
  } catch (err) {
    console.log(chalk.red("Application Error"), err);
  }
}

crowlerInit();
