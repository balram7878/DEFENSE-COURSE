// const fun = async () => {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();
//   console.log(data);
// };

// fun();

// const p = fetch("https://api.github.com/users");
// p.then((res) => {
//   // console.log(res.__proto__)
//   res.text().then(txt=>JSON.parse(txt)).then(console.log);
// });

const root = document.getElementById("root");
fetch("https://api.github.com/users").then((res) =>{
  if(!res.ok)
    throw new Error("data not present");
  res.json().then((users) => {
    users.forEach((e) => {
      const card = document.createElement("div");
      card.className = "card";
      root.append(card);
      const profile=document.createElement("img");
      profile.src=e.avatar_url;
      profile.className="profile";
      card.append(profile)

    });
  })
})
.catch(err=>{
  const h1=document.createElement("h1");
  h1.textContent=err.message;
  root.append(h1);
});
