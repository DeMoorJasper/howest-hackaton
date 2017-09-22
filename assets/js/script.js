const sendMessage = (msg) => {
    socket.emit('newMessage', msg);
    console.log('Message sent');
};  

const triggerMsgEvent = (e) => {
    e.preventDefault();
    let msg = $('#sendMsg #msg').val();
    sendMessage(msg);
    const username = $('#username').val();
    addMessage(msg, username);
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

const addMessage = (msg, user) => {
    let messages = $("#messages").html();
    messages += `<p>${ user }: ${ msg }</p>`;
    $("#messages").html(messages);
};

const registerMsgListener = () => {
    socket.on('updateClients', (data) => {
        console.log(data);
        addMessage(data.msg, data.user);
    });
};

$(() => {
    $('#sendMsg').on('submit', triggerMsgEvent);
    registerMsgListener();
    registerUserList();
});