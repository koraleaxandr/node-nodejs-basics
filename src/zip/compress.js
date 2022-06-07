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

export const compress = async () => {
    const inputFilePath = `${__dirname}/files/fileToCompress.txt`;
    const outputFilePath = `${__dirname}/files/archive.gz`;
    const input = fs.createReadStream(inputFilePath, 'utf-8');
const output = fs.createWriteStream(outputFilePath);
const gzip = zlib.createGzip();

pipeline(
    input,
    gzip,
    output,
    err => {
        if (err) {
            console.log('zip operation failed');
        }
    }
);
};

compress();