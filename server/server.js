const express = require('express');
const socket_io = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = Esta es la comunicación del backend.
let io = socket_io(server);

io.on('connection', (client) => {

    console.log('Usuario conectado!');

    client.emit('enviarMensaje', {
        usuario: 'administrator',
        mensaje: 'holo terrícola'
    });

    // Escuchando eventos
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchando cliente
    client.on('enviarMensaje', (message, callback) => {

        console.log(message);

        if (!message.usuario) {
            return callback({ ok: false, message: 'Todo MAL!!!!' });
        }

        return callback({ ok: true, message: 'Todo bien!' });

    });

});


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});