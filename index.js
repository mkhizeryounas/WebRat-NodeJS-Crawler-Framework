const rp = require("request-promise");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));
$.fetch = rp;

async function crowlerInit() {
  let filePath = process.argv.slice(2);
  if (!filePath.length)
    throw {
      error: "File path required"
    };
  let mod = require(`./${filePath[0]}`);
  try {
    await mod($, function(err, data) {
      try {
        if (err) throw err;
        console.info("Callback Success:", data);
      } catch (err) {
        console.error("Callback Error:", err);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

crowlerInit();
