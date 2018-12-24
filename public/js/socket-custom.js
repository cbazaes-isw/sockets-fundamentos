var socket = io();

// Escuchar eventos
socket.on('connect', () => {

    console.log('Conectado al servidor');

});

socket.on('disconnect', () => {

    console.log('Perdimos conexión con el servidor');

});

// Enviar info al servidor
socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola mundo'
}, (response) => {
    console.log('respuesta server:', response);
});

// Escuchando información
socket.on('enviarMensaje', (message) => {
    console.log('Servidor', message);
});