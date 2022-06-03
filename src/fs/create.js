import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';


export const create = async () => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathString = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.writeFile(pathString,
            'I am fresh and young', {
                flag: 'ax'
            });
    } catch (error) {
        console.log('FS operation failed');
    };
};

create();