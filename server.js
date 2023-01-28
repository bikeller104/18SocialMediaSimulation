const express = require('express');
const { appendFile } = require('fs');
const db = require('./config/connection');
const routes = require('./routes'); //this will give me the index.js file from the routes folder

const PORT = process.env.PORT || 3001;
const app = express();

//not using url encoded yet because I dont think i need it
//app.use(express.urlencoded());
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`api server listening on ${PORT}`);
    })
})