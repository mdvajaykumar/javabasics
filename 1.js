function createEmployee(username, email, mobile, password) {
  console.log(`Username ${username}`);
  console.log(`email ${email}`);
  console.log(`Mobile ${mobile}`);
  console.log(`Password ${password}`);
}

createEmployee("ajaykumar", "ajaykumar@481", "939822000", "ajat@450");

let employee = {
  username: "ajaykumar",
  password: "123456",
  mobile: "958978963",
  email: "majakumar481@",
};

let { username, password, mobile, email } = employee;
console.log(username, password, mobile, email);

let list = ["mumbai", "delhi", "chennai", "hyderbad"];

let [c1, c2, c3, c4] = list;
console.log(c1, c2, c3, c4);

function mathExecutor(callback) {
  if (typeof callback == "function") {
    const total = callback(10, 20);
    console.log(total);
  }
}

mathExecutor((n1, n2) => n2 - n1);
mathExecutor((n1, n2) => n2 + n1);
