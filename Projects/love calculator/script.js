const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const crush = document.getElementById("crush");
  const result = (name.value.length + crush.value.length) % 101;
  const h2 = document.querySelector("#result");
  h2.textContent = `Result: ${result}`;
});
