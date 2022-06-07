import { stdin } from 'process';
import { pipeline } from 'stream';

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {    
    console.log('ENTER DATA OR  Ctrl + C for exit');
    const writeToPath = `${__dirname}/files/fileToWrite.txt`
    const input = stdin;
    const output = fs.createWriteStream(writeToPath);
    pipeline(
        input,
        output,
        err => {
            if (err) {
                console.log('write operation failed');
            }
        }
    );
};

write();