import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    const originFolderPath = path.join(__dirname, 'files');    
    console.log(originFolderPath);
    const targetFolderPath = path.join(__dirname, 'files_copy');
    try {
        const files = await fs.readdir(originFolderPath, {withFileTypes : true});
        console.log(files);
        for (const file of files)
          console.log(file);
      } catch (err) {
        console.log('FS operation failed');
      }
};

copy();
