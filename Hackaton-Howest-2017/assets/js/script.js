const sendMessage = (msg) => {
    socket.emit('newMessage', msg);
    console.log('Message sent');
};  

const triggerMsgEvent = (e) => {
    e.preventDefault();
    sendMessage($('#sendMsg #msg').val());
};

const registerUserList = () => {
    socket.on('updateUserList', (data) => {
        console.log(data);

        let html = "<ul>";
        for (let i=0; i < data.length; i++) {
            html += `<li>${ data[i] }</li>`;
        }
        html += "<ul>";

        let userlist = $("#userlist").html(html);
    });
};

const registerMsgListener = () => {
    socket.on('updateClients', (data) => {
        console.log(data);
        let messages = $("#messages").html();
        messages += `<p>${ data.user }: ${ data.msg }</p>`;
        $("#messages").html(messages);
    });
};

$(() => {
    $('#sendMsg').on('submit', triggerMsgEvent);
    registerMsgListener();
    registerUserList();
});