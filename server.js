const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', function (req, res) {
    res.send("<h1>Главная страница</h1>");
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(9000, console.log("Working"));