// function fun(age) {
//   return new Promise((resolve, reject) => {
//     age > 18
//       ? resolve("Promise resolved")
//       : reject("Promise rejected: you are less than 18");
//   });
// }

// fun(21)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Promise settled");
//   });

// async function fun(age) {

//   return "Promise resolved";
// }

// fun(18)
// .then(console.log)

// fetch("https://api.github.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("Promise settled"))

// async function fetchUsers() {
//     const res=await fetch("https://api.github.com/users");
//     if(!res.ok)
//         throw new Error("Data not fetched")
//     const data=await res.json();
//     console.log(res)
// }

// try{
//     fetchUsers();
// }catch(err){
//     console.log(err)
// }

// console.log("helo")

async function redisClient() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connected to redis client");
    }, 1000);
  });
}

async function mysql() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connented to mysql");
    }, 1000);
  });
}

const initializeConnections = async () => {
  const [redis,mysqlDB]=await Promise.all([redisClient(), mysql()]);
  console.log(redis,mysqlDB);
};

initializeConnections();
