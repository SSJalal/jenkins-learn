const express = require('express')

const app = express()
const PORT = 8081

app.get('/health-check', (req, res) => {
    return res.status(200).send('Up n running..');
})

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error listening on port: ${PORT}`, err);
        throw err;
    }
    console.log(`Server is listening on port: ${PORT}`);
})