const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const formData =  new FormData(e.target)
  console.log(e.target[0].value);
  console.log(e.target[1].value);
});
