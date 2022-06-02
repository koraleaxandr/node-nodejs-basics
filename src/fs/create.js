import * as fs from "fs";
import * as path from 'path';

export const create = async () => {
     fs.writeFile(
    path.join(path.dirname, 'files', 'fresh.txt'),
    'I am fresh and young', {flag: 'ax'}
    (err) => {
        if (err) throw err;
        console.log('FS operation failed');        
    });
};