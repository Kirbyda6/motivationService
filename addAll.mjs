import fetch from 'node-fetch';
import * as data from './data.json';

const addQuotes = async (url, x) => {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
    })
    .catch(err => console.log(err))
};

for(let x of data.default){
    addQuotes('http://localhost:3001/motivation', x)
}