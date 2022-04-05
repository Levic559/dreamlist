const fs = require('fs');
// const afs = fs.promises;
// create a JSON object
const user = [{
    "id": 1,
    "name": "John Doe",
    "age": 22
},{
    "id": 2,
    "name": "Jack",
    "age": 25
},{
    "id": 3,
    "name": "Lin",
    "age": 20
}
];

// convert JSON object to string
const data = JSON.stringify(user);

// write JSON string to a file
fs.writeFile('./data/user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});