#!/usr/bin/env node
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');


(async () => {
  const files = await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'src/assets/images.min',
    plugins: [
      imageminMozjpeg({
        quality: 75
      }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  console.log(`${files.length} files are minified!`);
})();
