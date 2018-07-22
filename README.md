# Web Information Retrieval 

This package is use to make crawlers. You can write crawlers in nodejs and use the `$` jQuery selecters.

### How to install 

Clone the project

```
cd <project-dir>
npm i
```

### Example Crawler
Make a new file and paste the the following code.
```
module.exports = async function($, callback) {
  let url = "https://beta.zameen.com/Plots/Lahore_DHA_Defence-9-1.html";
  let content = await $.fetch(url);
  callback($(content).find(".listig-card-outter").length);
};

```

### How to use

``` 
node index.js <path-to-crawler-file>
```
### Explain
Following are the params which is required by a crawler.
 - <b>$</b> Includes all jquery functions. To fetch a url use `$.fetch` (for more docs see request-promise module https://www.npmjs.com/package/request-promise) instead of `$.ajax`
 - <b>callback</b> Should be called when you are done with the crawler as `callback(err, res)`
 

### Technology

 - NodeJS
