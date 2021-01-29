const path = require("path");
const os = require("os");
const fs = require("fs");

const EventEmitter = require("events");
const emitter = new EventEmitter();

//register a listener
emitter.on("messageLogged", (eventArg) =>
  console.log("Listener called", eventArg)
);

//raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });

const pathObj = path.parse(__filename);
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// const files = fs.readdirSync("../");
const files = fs.readdir("../", (err, file) => {
  if (err) console.log("error", err);
  else console.log("result", file);
});

console.log(pathObj);
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
