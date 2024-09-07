// https://brianchildress.co/find-latest-file-in-directory-in-nodejs/
const path = require('path');
const fs = require('fs');

const getMostRecentFile = (dir) => {
  const files = orderRecentFiles(dir);
  return files.length ? files[0] : undefined;
};

const orderRecentFiles = (dir) => {
  return fs.readdirSync(dir)
    .filter((file) => fs.lstatSync(path.join(dir, file)).isDirectory())
    .map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
};

//https://stackoverflow.com/a/58027214
var data = [getMostRecentFile('./versions')],
    highest = data
        .reduce((a, b) =>
            0 < a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
                ? a
                : b
        );

console.log(highest);

fs.cpSync(path.join(__dirname,"versions",highest.file), path.join(__dirname,"versions","latest"), {recursive: true, force: true});

