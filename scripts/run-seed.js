const data = require("../app/lib/placeholder-data");
const seed = require("./seed");
const db = require("../connection");

const runSeed = () => {
  return seed(data).then(() => db.end());
};

runSeed();
