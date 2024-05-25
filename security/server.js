const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('./auth');

const app = express();
app.use(bodyParser.json());

const users = [
    {
        username: 'user1',
        password: 'password1'
    }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const accessToken = jwt.sign({ username: user.username }, 'your_jwt_secret');
        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

app.get('/protected', authenticateJWT, (req, res) => {
    res.send('You are authenticated');
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
});
