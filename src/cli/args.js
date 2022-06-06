export const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((element, index) => {
        if (index % 2 === 0) {
            console.log(`RSS_${element} = ${args[index +1]}`);
        } 
    });
};

parseArgs();