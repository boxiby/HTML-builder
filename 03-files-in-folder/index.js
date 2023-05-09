const fs = require('fs');
const path = require('path');

const mainPath = path.resolve(__dirname, 'secret-folder');

fs.readdir(mainPath, (err, items) => {
  if (err) { console.error(err); }

  items.forEach(
    item => {
      const itemPath = path.resolve(mainPath, item);
      fs.stat(itemPath, (err, stats) => {
        if (err) { console.error(err); }
        if (stats.isFile()) {
          const itemSizeInBytes = stats.size;
          const itemSizeInKb = itemSizeInBytes / 1024;
          const itemName = path.basename(item, path.extname(item));
          const itemExt = path.extname(item).replace('.', '');
          console.log(`${itemName}-${itemExt}-${itemSizeInKb.toFixed(3)}kb`);
        }
      });
    }
  )
});