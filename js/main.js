const blogButton = document.getElementById("blog-button");
const contactButton = document.getElementById("contact-button");
const aboutButton = document.getElementById("about-button");
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

contactButton.addEventListener("click", displayContact);
blogButton.addEventListener("click", displayBlog);
aboutButton.addEventListener("click", displayAbout);
