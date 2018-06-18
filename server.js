// const express = require('express');
// const path = require('path');
//
// const app = express();
//
//
// var artists = [{
//     id: 1,
//     name: 'Olga'
// },
//     {
//         id:2,
//         name: 'Ihor'
//     }];
// app.get('/ping', function(req, res) {
//     res.send('Pong :)');
// });
// // app.use(express.static(path.join(__dirname, '/build')));
//
// app.get('/art', function(req, res) {
//     res.send(
//         artists.map( name=>
//             name.name
//         )
//     )
// });
//
// app.get('/art/:id', function(req, res) {
//     console.log(req.params);
//     var artist = artists.find(function(artist) {
//         return artist.id === +(req.params.id)
//     });
//     res.send(artist.name);
// });
//
// app.listen(3012, function() {
//     console.log('Working')
// });


// require('babel-register')({
//     presets: [ 'es2015' ]
// });
//
// const {createServer} = require('http');
// const express = require('express');
// const compression = require('compression');
// const morgan = require('morgan');
// const path = require('path');
//
//
// const normalizePort = port => parseInt(port, 10);
// const PORT = normalizePort(process.env.PORT || 5000);
// const app = express();
// const dev = app.get('env') !== 'production';
//
// if (!dev) {
//     app.disable('x-powered-by');
//     app.use(compression());
//     app.use(morgan('common'));
//
//     app.use(express.static(path.resolve(__dirname, 'build')));
//
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'build', 'index.html') )
//     })
// }
//
// if(dev) {
//     app.use(morgan('dev'))
// }
//
// const server = createServer(app);
// server.listen(PORT, err =>
//     if(err) throw err;
//     console.log('Ready');
// });
//


const express = require('express');
const path = require('path');
const app = express();

var artists = [{
    id: 1,
    name: 'Olga'
},
    {
        id:2,
        name: 'Ihor'
    }];

app.get('/art', function(req, res) {
    res.send(
        artists.map( name=>
            name.name
        )
    )
});
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
app.get('/ping', function (req, res) {
    res.send("Pong");
});


// app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    console.log(req.params);
    res.sendFile(path.resolve(__dirname, 'build', 'index.html') )
});


app.listen(9000, console.log("Working"));


