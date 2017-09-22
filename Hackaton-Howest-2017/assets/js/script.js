const sendMessage = function(msg) {
    for (let i=0; i < 20; i++) {
        var bericht = "Hey joske";
        socket.emit('zegHallo', bericht);
        console.log('send msg');
    }
    socket.emit('zegHallo', msg);
    console.log(socket);
};  

const triggerMsgEvent = function(e) {
    e.preventDefault();
    sendMessage($('#sendMsg #msg').val());
};

const registerMsgListener = function() {
    socket.on('zegHallo',function(data){
        console.log(data);
    });
};

$(() => {
    $('#sendMsg').on('submit', triggerMsgEvent);
    registerMsgListener();
});