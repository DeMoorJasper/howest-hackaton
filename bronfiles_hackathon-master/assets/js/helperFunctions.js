const socket = io.connect('http://nodeprojects.me/');

const connect = function (e) {
  e.preventDefault();
  socket.emit('enterLobby', $('#username').val());
};

const handleConnection = function () {
  socket.on('connectionAccepted', () => {
    $('.startPannel').addClass('hide');
    $('.lobby').removeClass('hide');
  });

  socket.on('connectionDeclined', (err) => {
    console.error(err);
  });
}();

$(() => {
  $('#enterLobby').on('submit', connect);
});
