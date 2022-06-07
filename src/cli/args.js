import { stdout } from 'process';

export const parseArgs = () => {
    const args = process.argv.slice(2);
    let argsString = '';
    args.forEach((element, index) => {
        if (index % 2 === 0) {
            let endOfString = index >= args.length-2 ? '':', ';
            argsString+= `RSS_${element} = ${args[index +1] + endOfString}`;
        } 
    });
    console.log(argsString);
};

parseArgs();

//for testing - npm run src/cli/args 11 22 33 44 55 ...and so on