import * as fs from 'fs/promises';
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
    const input = await fs.readFile(inputFilePath, err => {
        if (err) {
            console.log('zip operation failed');
        }
    });
    stdout.write(input);
};

read();