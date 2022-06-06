import * as path from'path';
import { release, version } from 'os';
import { createServer: createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

import * as c from './files/c.js';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

