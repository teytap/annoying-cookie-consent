const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalCloseBtn = document.getElementById("modal-close-btn");
const declineBtn = document.getElementById("decline-btn");
const consentForm = document.getElementById("consent-form");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
    Uploading your data to the dark web...
    </p>
    </div>`;
  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");
    uploadText.innerText = "Making the sale...";
  }, 1500);
  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="https://media.tenor.com/7x7QRKoQTX4AAAAC/hahaha-laughing.gif">
    </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});
