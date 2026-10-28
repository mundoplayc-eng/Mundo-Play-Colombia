const buyButton = document.querySelector("#buy-button");
const notice = document.querySelector("#notice");
const closeDialog = () => notice.close();
buyButton.addEventListener("click", () => notice.showModal());
document.querySelector("#close-dialog").addEventListener("click", closeDialog);
document.querySelector("#ok-dialog").addEventListener("click", closeDialog);
