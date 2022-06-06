export const parseEnv = () => {
    // const variables = Object.entries(process.env);
    // variables.forEach(element => {
    //     console.log(`RSS_${element.key} = ${element.value}`);        
    // });
    for (let key in process.env) {
        console.log(`RSS_${key} = ${key.value}`);        
       };    
};

parseEnv();