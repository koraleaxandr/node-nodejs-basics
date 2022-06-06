const {
    createHash
  } = await import('crypto');
import * as fs from 'fs/promises';
import * as path from 'path';
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const file =  await fs.open(`${__dirname}/files/fileToCalculateHashFor.txt`);
    const input = file.createReadStream();
    input.on('readable', () => {
        const data = input.read();
        if (data)
          hash.update(data);
        else {
          console.log(`${hash.digest('hex')}`);
        }
      });
};

calculateHash();