const h2 = document.createElement("h2");
h2.textContent = "this is heading 2";
h2.id = "heading2";
h2.classList.add("heading");
h2.classList.add("h2");

document.querySelector("h1").after(h2);

const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.textContent = "apple";
// const li2 = document.createElement("li");
// li2.textContent = "banana";

// const li3 = document.createElement("li");
// li3.textContent = "cherry";


h2.after(ul);
// ul.append(li1, li2);
// ul.prepend(li3)

// const li4=document.createElement("li");
// li4.textContent="mango";

// li2.after(li4)

// console.log(ul.children)

const arr=["one","two","three","four"];
const fragment=document.createDocumentFragment();

arr.forEach(e=>{
    const li=document.createElement('li');
    li.textContent=e;
    fragment.append(li);
})

// console.log(items)

ul.append(fragment)
ul.remove()


