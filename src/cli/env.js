export const parseEnv = () => {
    const keys = Object.entries(process.env);
    let keysString = '';
    keys.forEach((element, index) => {
        let endOfString = index >= keys.length-2 ? '':', ';
        if (element[0].startsWith('RSS_')) {
        keysString += `${element[0]} = ${element[1]}; `; 
        }
       }); 
       console.log(keysString.slice(0,-2));   
};

parseEnv();

//for testing launch
// RSS_NAME=Alexandr RSS_LastName=Karatkevich node src/cli/env.js