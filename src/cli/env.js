export const parseEnv = () => {
    const keys = Object.entries(process.env);
    keys.forEach((element) => {
        console.log(`RSS_${element[0]} = ${element[1]}`); 
       });    
};

parseEnv();