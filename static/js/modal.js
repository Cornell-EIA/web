// Get the Modal and modal-img
let modal = document.querySelector("#myModal");
let modal_header = document.querySelector(".modal-header")
let modalImg = document.querySelector(".modal-img");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("profile_name")

// Show Modal
function showModal(elem) {
  modal.classList.remove("hide");
  modalImg.setAttribute("src", elem.src);
  captionText.innerHTML = elem.alt;
  captionText2.innerHTML = elem.id;
}

// Hide Modal
function hideModal() {
  modal.classList.add("hide");
}

// Hide Modal when backdrop (black transparent area) is clicked
modal.onclick = function (event) {
  if (event.target === modal) {
    hideModal();
  }
  else if (event.target == modal_header) {
    hideModal();
  }
}