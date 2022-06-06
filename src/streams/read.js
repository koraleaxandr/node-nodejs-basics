import * as fs from 'fs';
import * as path from 'path';
import { stdout } from 'process';
import {
    fileURLToPath
} from 'url';

export const read = async () => {
    const __filename = fileURLToPath(
        import.meta.url);
    const __dirname = path.dirname(__filename);
    const inputFilePath = `${__dirname}/files/fileToRead.txt`;
    const input = fs.createReadStream(inputFilePath);
    input.pipe(stdout);
};

read();