const util = require("util");
const fs = require("fs");
const path = require("path");

const readdir = util.promisify(fs.readdir);

interface FindSameNames {
  (baseDir: string): void;
};

const findSameNames: FindSameNames = async (basePath) => {
  for (const entry of await readdir(basePath)) {
    console.log(path.resolve(`${basePath}/${entry}`));
  }
};


export default findSameNames;