const { mkdir, readdir, copyFile } = require('fs/promises');
const path = require('path');


async function copyDir() {
  try {
    await mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true });

    const files = await readdir(path.resolve(__dirname, 'files'));

    for (const file of files) {
      const filePath = path.join(__dirname, 'files', file);
      const copyPath = path.join(__dirname, 'files-copy', file);

      await copyFile(filePath, copyPath);
    }
  }
  catch (error) {
    console.error(error);
  }
}

copyDir();

