const arr = [1, 2, 3, 4, 5, 6, 7];
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
btn.addEventListener("click", () => {
  const i = Math.floor(Math.random() * 7);
  h1.textContent = arr[i];
});
