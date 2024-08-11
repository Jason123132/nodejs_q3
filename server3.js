const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/phone.html');
});

app.post('/validatePhoneNumber', (req, res) => {
    const { name, phone } = req.body;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (phonePattern.test(phone)) {
        res.send(`Hello ${name}, the phone number ${phone} is valid.`);
    } else {
        res.send(`Hello ${name}, the phone number ${phone} is invalid. Please use the format ddd-ddd-dddd.`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});