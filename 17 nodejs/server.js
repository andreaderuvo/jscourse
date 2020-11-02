const express = require('express')
const app = express()
const port = 3000


//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
    },
    2: {
        id: '2',
        username: 'Dave Davids',
    },
};

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
})

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})