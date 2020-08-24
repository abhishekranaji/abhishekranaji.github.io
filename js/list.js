var toggler = document.getElementsByClassName("nav-left-side-expand");
console.log(toggler)
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("nav-left-side-expand-down");
  });
}