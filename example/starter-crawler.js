module.exports = async function($, callback) {
  let url = "https://beta.zameen.com/Plots/Lahore_DHA_Defence-9-1.html";
  let content = await $.fetch(url);
  callback(null, $(content).find(".listig-card-outter").length);
};
