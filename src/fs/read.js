import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const originFolderPath = path.join(__dirname, 'files', 'fileToRead.txt');
    try {
     const file =  await fs.readFile(originFolderPath, {encoding: 'utf-8' });
     console.log(file);
    } catch (error) {
     console.log('FS operation failed');
    }
};

read();