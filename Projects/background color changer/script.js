const root = document.querySelector("#root");
root.addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.style.backgroundColor;
});
