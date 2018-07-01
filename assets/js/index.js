var formDisplay = document.querySelector("#hidden");
var replyButton = document.querySelector("#reply-button");
var formDisplay1 = document.querySelector("#hidden1");
var replyButton1 = document.querySelector("#reply-button1");
var formDisplay2 = document.querySelector("#hidden2");
var replyButton2 = document.querySelector("#reply-button2");

replyButton.addEventListener("click",function(){
    formDisplay.style.visibility="visible";
});

replyButton1.addEventListener("click",function(){
    formDisplay1.style.visibility="visible";
});

replyButton2.addEventListener("click",function(){
    formDisplay2.style.visibility="visible";
});