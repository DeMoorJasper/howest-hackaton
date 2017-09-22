const sendMessage = function(msg) {
    socket.emit('newMessage', msg);
    console.log('Message sent');
};  

const triggerMsgEvent = function(e) {
    e.preventDefault();
    sendMessage($('#sendMsg #msg').val());
};

const registerUserList = () => {
    socket.on('updateUserList', (data) => {
        console.log(data);

        let html = "<ul>";
        for (let i=0; i < data.length; i++) {
            html += `<li>${data[i]}</li>`;
        }
        html += "<ul>"

        $("#userlist").html(data.join("<li>"))
    });
};

const registerMsgListener = function() {
    socket.on('newMessage', (data) => {
        console.log(data);
    });
};

$(() => {
    $('#sendMsg').on('submit', triggerMsgEvent);
    registerMsgListener();
    registerUserList();
});