// DEstructuring objects as function parameters
function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(1, {});
fun(2, { name: "Zain" });
fun(3, { age: 22 });

const userData = {
  firstName: "Steel",
  lastName: "soWhat",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

// getter
userData.fullName;

// setter
userData.fullName = "Sven Wacker";
userData.fullName;

// constructor

