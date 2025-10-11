// function createCustomer() {
//   let balance = 200;
//   return {
//     getBalance: function () {
//       console.log(balance);
//     },
//     updateBalance(amount) {
//       if (typeof amount !== "number" || amount === 0)
//         throw new Error("amount not valid");
//       balance += amount;
//       console.log("Available Balance: ",balance)
//     },
//   };
// }

// const customer=createCustomer();
// try{
//     customer.updateBalance(34);
// }catch(err){
//     console.log(err.message
//     )
// }

// function fun(value) {
//   return function temp(num) {
//     console.log(value * num);
//   }
// }

// fun(10)(5);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr1=arr.map(e=>(e/2).toFixed(3));
console.log(arr1)
