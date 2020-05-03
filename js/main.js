let bio = document.querySelector(".bio");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".blog");

let displayContact = () => {
  contact.classList.add("current");
  bio.classList.remove("current");
  blog.classList.remove("current");
};
let displayAbout = () => {
  contact.classList.remove("current");
  blog.classList.remove("current");
  bio.classList.add("current");
};
let displayBlog = () => {
  contact.classList.remove("current");
  bio.classList.remove("current");
  blog.classList.add("current");
};

function eventHandler(id, event) {
  const button = document.getElementById(id);
  button.addEventListener("click", event);
}
eventHandler("contact-button", displayContact);
eventHandler("blog-button", displayBlog);
eventHandler("about-button", displayAbout);

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", " ");
//     this.className += " active";
//   });
// });
