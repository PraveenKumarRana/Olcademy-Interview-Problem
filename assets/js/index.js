var formDisplay = document.querySelector("#hidden");
var replyButton = document.querySelector("#reply-button");

replyButton.addEventListener("click",function(){
    formDisplay.style.visibility = "visible";
});
