const fs = require('fs');
// fs.readFile('./resource/i.md', (err, data1) => {
//     fs.readFile('./resource/love.md', (err, data2) => {
//         fs.readFile('./resource/learn.md', (err, data3) => {
//             let result = `${data1}\r\n${data2}\r\n${data3}`;
//             console.log(result);
//         })

//     })
// })

const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/i.md', (err, data) => {
        resolve(data);
    })
})

p.then(value=>{
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/love.md', (err, data) => {
            resolve([value,data]);
        })
    })
    
}).then(value=>{
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/learn.md', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'));
})