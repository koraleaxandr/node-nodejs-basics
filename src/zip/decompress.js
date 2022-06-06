import * as fs from 'fs';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

import * as zlib from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const outputFilePath = `${__dirname}/files/fileToCompress.txt`;
    const inputFilePath = `${__dirname}/files/archive.gz`;
    const input = fs.createReadStream(inputFilePath);
const output = fs.createWriteStream(outputFilePath, {decompress:'utf-8'});
const unzip = zlib.createGunzip();
pipeline(
    input,
    unzip,
    output,
    err => {
        if (err) {
            console.log('unzip operation failed');
        }
    }
); 
};

decompress();