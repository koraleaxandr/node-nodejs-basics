import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';


export const remove = async () => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    try {
        await fs.rm(`${__dirname}/files/fileToRemove.txt`)
    } catch (error) {
        console.log('FS operation failed');
    }
};

remove();