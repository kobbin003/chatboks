import "./style.css";

// // const currentTime = moment().format();
// // console.log("time", currentTime);
// const socket = io();

// socket.on("message", (message) => console.log(message));
// /** DOM's */
// let messageContainer = document.getElementById("chats");
// // Message Submit
// let form = document.querySelector(".chat-message");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   /** get message text */
//   const msg = e.target.elements.messageSent.value;

//   /** emit the message to server */
//   socket.emit("chatmessage", msg);

//   /** clear the input */
//   e.target.elements.messageSent.value = "";
//   e.target.elements.messageSent.focus;
// });
// //  show chatmessages on DOM
// socket.on("chatmessage", (message) => {
//   outputMessage(message);

//   /** scroll down */
//   //scrollTop = how much scrolled.
//   // scrollHeight = how much hidden.
//   messageContainer.scrollTop = messageContainer.scrollHeight;
// });

// // output message to dom
// function outputMessage(message) {
//   const messagebox = document.getElementById("chats");
//   messagebox.innerHTML += `<div class="chat-board" id="chat-board">
//   <div class="chat-board-info">
//     <p><b>kobin</b></p>
//     <p><b>17-01-2021</b></p>
//   </div>
//   <div class="chat-board-text">
//     <div id="chatmessagebox"><p>${message}</p></div>
//   </div>
// </div>`;
// }
