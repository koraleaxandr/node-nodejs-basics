import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathString = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
    try {
        await fs.writeFile(pathString,
            'I am fresh and young', {flag: 'ax'});
            console.log('1');
    } catch (error) {        
        console.log('FS operation failed');        
    };
};

create();