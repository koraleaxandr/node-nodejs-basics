export const parseEnv = () => {
    for (let key in process.env) {
        console.log(`RSS_${key} = ${key.value}`);        
       };    
};

parseEnv();