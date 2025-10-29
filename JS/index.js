const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age > 18) resolve("access granted!");
    else reject("you are too young");
  });
};

checkAge(11)
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });
