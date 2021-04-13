// Get the Modal and modal-img

let modal = document.querySelector("#myModal");
let modal_header = document.querySelector(".modal-header");
let modalImg = document.querySelector(".modal-img");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("profile_name");

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
  } else if (event.target == modal_header) {
    hideModal();
  }
};

function genMember(member, className) {
  html = "";
  html += `<div class="card ${className}" style="min-width: 20rem;max-width: 20rem;">`;

  html += `<img onerror="this.src='./static/images/headshots/gray.jpeg'"`;
  html += `src="${member.image}" `;
  html += `alt="${member.bio}" `;
  html += 'class = "card-img-top "';
  html += `style = "min-height:80%;object-fit: cover;"`;
  html += `id ="${member.name} - ${member.major} ${member.year}">`;
  html += `<h2 class="name">${member.name}</h2>`;
  html += `<p class="title">${member.title}</p>`;
  html += "</div>";
  return html;
}
