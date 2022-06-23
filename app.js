const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || 'localhost';


const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

// app.listen(7000, ()=> {
//     console.log('servidor corrriendo');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.listen(PORT, ()=> {
    console.log(`Server running at http://${HOST}:${PORT}/`);

});