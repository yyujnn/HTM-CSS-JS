// console.log("Hello world!")

// npm  : node package manager
// figlet 모듈 


var figlet = require("figlet");

figlet("Hello Youjin!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
