import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    const originFolderPath = path.join(__dirname, 'files');
   try {
    const files =  await fs.readdir(originFolderPath);
    console.log(files);
   } catch (error) {
    console.log('FS operation failed');
   }
};

list();