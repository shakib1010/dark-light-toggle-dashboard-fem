// DOM Selectors
let toggleBtn = document.querySelector("input#toggle");
let body = document.querySelector("body");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
console.log(localStorage);

if(currentTheme === "dark"){
  body.classList.add("dark");
  toggleBtn.checked = true;
} else if(currentTheme === "light") {
  body.classList.remove("dark");
  body.classList.add("light")
  toggleBtn.checked = false;
} else {
  if(prefersDarkScheme.matches) {
    toggleBtn.checked = true;
  }

  if(!prefersDarkScheme.matches) {
    toggleBtn.checked = false;
  }
}

toggleBtn.addEventListener("click", () => {
  if(toggleBtn.checked) {
    body.classList.add("dark");
    toggleBtn.checked = true;
    localStorage.setItem("theme", "dark");
  }

  if(!toggleBtn.checked) {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleBtn.checked = false;
    localStorage.setItem("theme", "light");
  }
})