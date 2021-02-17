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
//     ${this.act[0]}, ${this.act[1]}
//   , ${this.act[this.act.length - 1]}

// getter
userData.fullName;

// setter
userData.fullName = "Sven Wacker";
userData.fullName;

// constructor
function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `${this.name}, you are ${this.age} years old and you prefer ${this.act}.`
    );
  };
}
let sven = new Person("Sven", 45, ["sleep", "eat", "code"]);
sven.printOut();
let maria = new Person("Maria", 47, ["cook", "relax", "repeat"]);
maria.printOut();

// for in object
for (let prop in sven) {
  console.log(`sven.${prop}: ${sven[prop]}`);
}

let family = [
  ["Sven", 45, "teacher"],
  ["Maria", 47, "chef"],
  // ["Sila", 14, "student"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// forEach arr
family.forEach((arr) => arr.forEach((element) => console.log(element)));

// for of arr
for (let [key, val] of Object.entries(sven)) {
  console.log(`${key} : ${val}`);
}

function Beverage(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.printOut = function () {
    console.log(
      `${this.productName} selling price ${this.price}€. We have ${this.inventory} in stock.`
    );
  };
}
const pepsi = new Beverage("Pepsi", 2.33, 2232);
pepsi.printOut();

// get & set, create a car object that uses getter and setter method to get and set the following
// (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const carData = {
  modelName: " ",
  modelNumber: " ",
  engineCapacity: " ",
  get fullCarData() {
    console.log(
      `Your ${this.modelName} ${this.modelNumber} with ${this.engineCapacity} engine.`
    );
  },
  set fullCarData(obj) {
    //let arr = str.split(" ");
    // this.modelName = arr[0];
    // this.modelNumber = arr[1];
    // this.engineCapacity = arr[2];
    this.modelName = obj.name;
    this.modelNumber = obj.num;
    this.engineCapacity = obj.cap;
  },
};

carData.fullCarData;
// carData.fullCarData = "Audi A8 3.0";
carData.fullCarData = { name: "Audi", num: "A8", cap: " 3.0" };
carData.fullCarData;

// class

class Animals {
  // constructor method aka setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // instances properties after constructor
  display() {
    console.log(`This very cute${this.kind} lives in ${this.hometown}.`);
  }
}
const cat = new Animals("cat", "LA");
cat.display();
console.log(cat);

const newPet = new Animals("dog", "NY");
newPet.display();
newPet.age = 4;
console.log(newPet);
console.log(Object.values(newPet));

class color {
  constructor() {
    this.name = "";
    this.tep = 0;
  }
}
const red = new color();
console.log(red);
red.name = "RED";
red.tep = 232;
console.log(red);

class TV {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log(`max volume`);
    }
  }
  decVolume() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("you are muted");
    }
  }
  reset() {
    this.volume = 10;
    this.channel = 1;
    // volume and channel
  }
  randomChannel() {
    this.channel = Mathfloor(Math.random() * 50 + 1);
    console.log(`you are watching channel ${this.channel}`);
  }
  display() {
    console.log(
      `Brand: ${this.brand}\nVolume: ${this.volume}\nChannel: ${this.channel}.`
    );
  }
}

const samsung = new TV("SAMSUNG");
console.log(samsung);
samsung.incVolume();
console.log(samsung);

const apple = new TV("APPLE", 30, 55);
console.log(apple);
apple.reset();
console.log(apple);
// extends && super
