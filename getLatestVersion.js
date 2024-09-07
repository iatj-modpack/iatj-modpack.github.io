// https://brianchildress.co/find-latest-file-in-directory-in-nodejs/
const path = require('path');
const fs = require('fs');

const getMostRecentFile = (dir) => {
  const files = orderReccentFiles(dir);
  return files.length ? files[0] : undefined;
};

const orderReccentFiles = (dir) => {
  return fs.readdirSync(dir)
    .filter((file) => fs.lstatSync(path.join(dir, file)).isDirectory())
    .map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
};

console.log(getMostRecentFile('./versions').file);
fs.cpSync(path.join(__dirname,"versions",getMostRecentFile('./versions').file), path.join(__dirname,"versions","latest"), {recursive: true});