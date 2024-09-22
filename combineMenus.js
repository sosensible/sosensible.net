import fs from 'fs';
// const fs = require('fs');
import path from 'path';
// const path = require('path');
import { fileURLToPath } from 'url';

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const layersDir = path.join(__dirname, 'layers');
const outputDir = path.join(__dirname, 'app', 'data');
const outputFile = path.join(outputDir, 'menus.json');

// console.log(layersDir);
// console.log("outputDir", outputDir);
// console.log(outputFile);
let combinedMenu = [];

const siteMenuFile = path.join(__dirname, 'app', 'data', 'menu.json');
console.log("smf:  ", siteMenuFile);

// Read the siteMenuFile
if (fs.existsSync(siteMenuFile)) {
  const siteMenuContent = fs.readFileSync(siteMenuFile, 'utf-8');
  combinedMenu = JSON.parse(siteMenuContent);
  console.log("Site menu content:", combinedMenu);
} else {
  console.error("Site menu file does not exist:", siteMenuFile);
}
console.log("siteMenu", combinedMenu);

const getDirectories = (source) => {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

const getMenuData = (menuFilePath) => {
  if (fs.existsSync(menuFilePath)) {
    console.log('Reading menu file:', menuFilePath);
    const menuData = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));
    return menuData;
  }
  return [];
}

const directories = getDirectories(layersDir);
console.log(directories);

directories.forEach((dir) => {
  const menuFilePath = path.join(layersDir, dir, '/app/data/menu.json');
  console.log(menuFilePath);
  if (fs.existsSync(menuFilePath)) {
    console.log('Reading menu file:', menuFilePath);
    const menuData = getMenuData(menuFilePath);
    // const menuData = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));
    combinedMenu = combinedMenu.concat(menuData);
  }
})

console.log("Combined Menu:", combinedMenu);

fs.writeFile(outputFile, JSON.stringify(combinedMenu), {
  encoding: "utf8",
  flag: "w",
  mode: 0o666
},
  (err) => {
    if (err) {
      console.error('Error writing combined menu:', err);
    } else {
      console.log('Combined menu written to', outputFile);
    }
  });

// fs.readdir(layersDir, (err, directories) => {
//   if (err) {
//     console.error('Error reading layers directory:', err);
//     return;
//   }

//   directories.forEach((dir) => {
//     const menuFilePath = path.join(layersDir, dir, 'menu.json');
//     if (fs.existsSync(menuFilePath)) {
//       const menuData = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));
//       combinedMenu = combinedMenu.concat(menuData);
//     }
//   });

//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }

//   fs.writeFileSync(outputFile, JSON.stringify(combinedMenu, null, 2), 'utf-8');
//   console.log('Combined menu written to', outputFile);
// });

// const siteMenu = fs.readdirSync(path.join(outputDir, 'menu.json'));
