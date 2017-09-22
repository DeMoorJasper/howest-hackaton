const socket = io.connect('http://nodeprojects.me/');

const connect = function (e) {
  e.preventDefault();
  const username = $('#username').val();
  socket.emit('enterLobby', username);
  let user = 0;
  socket.emit('enterLobby', username);
};

const handleConnection = function () {
  socket.on('connectionAccepted', () => {
    $('.startPannel').addClass('hide');
    $('.lobby').removeClass('hide');
    console.log("Connected!");
  });

  socket.on('connectionDeclined', (err) => {
    console.error(err);
  });
}();

$(() => {
  $('#enterLobby').on('submit', connect);
});
