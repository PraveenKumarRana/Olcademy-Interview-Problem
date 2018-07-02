var formDisplay = document.querySelector("#hidden");
var replyButton = document.querySelector("#reply-button");
var formDisplay1 = document.querySelector("#hidden1");
var replyButton1 = document.querySelector("#reply-button1");
var formDisplay2 = document.querySelector("#hidden2");
var replyButton2 = document.querySelector("#reply-button2");
var hideForm     = document.getElementsByTagName("body");
var showForm     = document.getElementById("show-more");


//==============================================
//              REPLY BUTTON
//==============================================
// For checking purpose this will be and in final production loop will be used for the same perpose

replyButton.addEventListener("click",function(){
    formDisplay.style.visibility="visible";
    formDisplay1.style.visibility="hidden";
    formDisplay2.style.visibility="hidden";
});

replyButton1.addEventListener("click",function(){
    formDisplay1.style.visibility="visible";
    formDisplay.style.visibility="hidden";
    formDisplay2.style.visibility="hidden";
});

replyButton2.addEventListener("click",function(){
    formDisplay.style.visibility="hidden";
    formDisplay1.style.visibility="hidden";
    formDisplay2.style.visibility="visible";
});


//==============================================
//            SHOW MORE LOGIC
//==============================================

showForm.addEventListener("click",function(){
    alert("This will load other posts from the database after connecting the database in backend");
});