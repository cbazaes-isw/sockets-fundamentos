const { io } = require('../server');

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