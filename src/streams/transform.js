import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

export const transform = async () => {
    console.log('ENTER DATA OR  Ctrl + C for exit');
    const input = stdin;
    const output = stdout;
    const decode = new Transform({
        transform(chunk, encoding, callback) {
            let newChunk = '';
            chunk = chunk.toString(); 
              for (let i = chunk.length-1; i>= 0; i = i - 1) {
                  newChunk += chunk[i];
              }
              chunk = newChunk + `\n`;
          callback(null, chunk);
        },
      });

    pipeline(
        input,
        decode,
        output,
        err => {
            if (err) {
                console.log('transform operation failed');
            }
        }
    );
};

transform();