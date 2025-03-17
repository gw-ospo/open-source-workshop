import fs from 'fs';
import fsPromises from 'fs/promises';

export async function getPictures() {
  let allPictures = [];

  const contents = fs.readdirSync('YOUR_PHOTOS_HERE');

  for (let file of contents) {
    file = 'YOUR_PHOTOS_HERE/' + file;

    const imagesData = await fsPromises.readFile(file);
    allPictures.push(imagesData);
  }
  console.log("hi");
  return allPictures;
}