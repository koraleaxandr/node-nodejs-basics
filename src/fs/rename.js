import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    try {
        await fs.realpath(`${__dirname}/files/properFilename.md`)
        console.log('FS operation failed');
        return;
    } catch (error) {}
    try {
        await fs.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`)
    } catch (error) {
        console.log(error);
        console.log('FS operation failed');
    }
};

rename();