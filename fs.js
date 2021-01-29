const fs = require("fs");

// const files = fs.readdirSync("../");
const files = fs.readdir("../", (err, file) => {
  if (err) console.log("error", err);
  else console.log("result", file);
});
