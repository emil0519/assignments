const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res, next) => {
  res.render("layout");
  next();
  res.send("Hello world!");
});

app.get("/getData", add, function (req, res) {
  res.send("Something went wrong if you see me");
});

function add(req, res, next) {
  let answer = [];
  let num = Number(req.query.number);
  if (isNaN(num) == false) {
    for (let i = 0; i <= num; i++) {
      answer.push(i);
    }
    const answer2 = answer.reduce((arr, cur) => arr + cur);
    res.send(`${answer2}`);
  } else if ((req.query.number == undefined) == true) {
    res.send(`Lack of Parameter`);
  } else if (isNaN(num) == true) {
    res.send(`Wrong Parameter`);
  }
  next();
}

app.use(express.static("public")); //send static assert
//app.use("/static/", express.static("public")); set assert directed to specific router

app.listen(3000, () => {
  console.log("This runs.");
});
