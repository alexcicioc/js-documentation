var editorsMap = new Map();

function ready() {
    setupEditor();
}

function update() {
}

function setupEditor() {

new Editor("editor", ` const x = "Test";
    var y = 2;
    let z = true;
    console.log("av");
`);

new Editor("js-datatypes-editor", `typeof undefined // "undefined";

typeof 0 // "number"

typeof true // "boolean";

typeof "foo" // "string"

typeof Symbol("id") // "symbol";

typeof { property : 'value'} // "object"

typeof alert // "function"`);

new Editor("js-boolean-editor", `
10>9 // "true";

const value = true;
    
const anotherValue = new Boolean(false);
`);

new Editor("js-array-editor",`
//Create an Array
var cars = ["Dacia", "Skoda"];

// You can play with the methods described above
alert(cars);
`);

new Editor("js-number-editor", `let integerNumber = 123; //integer

let floatingNumber = 12.345; //floating number
    
alert( 1 / 0 ); // Will result in Infinity
    
alert( -1 / 0 ); // Will result in -Infinity
    
alert("not a number" / 2); // Will result in NaN, because we try to divide string with number
`);

new Editor("js-string-editor", `let str = "JavaScript";

let str2 = 'String with single quotes';

str2.toUpperCase();
// STRING WITH SINGLE QUOTES
`);

new Editor("js-object-editor", `// Object Literal
var Car = {
    brand: 'Toyota',
    color: 'black',
    doors: 5,
    start: function(){
        alert("Starting...");
    }
};
    
console.log(Car.brand, Car.start());
    
    
//The same example as above but using [Object constructors function]
function Car(brand, color, doors){
    this.brand=brand;
    this.color=color;
    this.doors=doors;
    
    function start() {
        console.log("Starting...");
    }
}
    
let myCar = new Car("Audi", "black", 5);
myCar.start();`);

new Editor("js-condition-editor", ` let n = 5;

if(n>5){
    console.log("Greater then 5");
} else {
    console.log("Less or equal...");
}

//another way to write if/else statement
(n>5) ? alert("Greater") : alert("Less then");`, 1);

new Editor("js-switch-editor", `var day = 4;

switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }
    
    console.log(day); //what value should have day variable ?`, 1);

new Editor("js-dowhile-editor", `var result = "";
var i = 0;
    
do {
    i = i + 1;
    result = result + i;
} while (i < 5);
    
console.log(result);
// expected result: "12345"`, 1);

new Editor("js-forin-editor", `var text = "";
var car = { brand: "Audi", color: "black", doors: 5 };
    
for (var prop in obj) {
    text += obj[prop]+ " ";
}
    
console.log(text);
// expected output: "Audi black 5"`, 1);

new Editor("js-for-editor", `for(let i=0; i<10; i++){
console.log(i);
}`, 1);

new Editor("js-forof-editor", `var iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11 21 31

iterable = 'boo';

for (let value of iterable) {
  console.log(value);
}

//"b"
//"o"
//"o"

`, 1);

new Editor("js-function-editor", `// Function Declaration
function firstFunction(parameters){
    statements
}

// Function with params
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  console.log(param1, param2);
}

// Function Expressions 
let secondFunction = function(parameters){
    statements
}

// Arrow Function Expression
let thirdFunction = (parameters) => {
    statements
}

var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
`, 1);

new Editor(
"js-functionreturn-editor", 
`function test(){
    return true;
}
test(); // true;

function double(num){
    num*=2;
}

double(); // undefined;
`, 1);

new Editor(
"js-classes-editor",
`class Pet {
    constructor(name, age){
        this.age=age;
        this.name=name;
    }

    bark(){
        alert(this.name + ' bark');
    }
}

var myPet = new Pet('Mike', 2);
myPet.bark();

`, 1);

new Editor(
"js-class-methods-editor", 
`class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // Animal {}
  Animal.eat() // class Animal

`, 1);

new Editor(
"js-getset-method-editor", 
`// ES6 get and set
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;   // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}
         
let bob = new Person('Bob');
console.log(bob.name);  // Outputs 'BOB'

`, 1);

new Editor(
"js-class-inheritance-editor", 
`
class Person {
    constructor(name) {
      this.name = name;
    }
  
    walk() {
      alert(this.name + ' is walking.');
    }
  }
           
  class Programmer extends Person { 
    constructor(name, programmingLanguage) {
      super(name);
      this.programmingLanguage = programmingLanguage;
    }
  
    writeCode() {
      alert(this.name + ' is coding in ' + this.programmingLanguage + '.');
    }
  }
           
  let alex = new Person('Alex');
  bob.walk();
           
  let cory = new Programmer('Cory', 'JavaScript');
  cory.walk();
  cory.writeCode();

`, 1);
}

function switchOverview(event) {
    switch (event.text) {
        case 'HTML':
            document.getElementById('js-overview').style.display = 'none';
            document.getElementById('css-overview').style.display = 'none';
            document.getElementById('html-overview').style.display = 'block';
            document.getElementById('html-details').style.display = 'block';
            document.getElementById('js-details').style.display = 'none';
            document.getElementById('css-details').style.display = 'none';
            break;
        case 'JavaScript':
            document.getElementById('html-overview').style.display = 'none';
            document.getElementById('css-overview').style.display = 'none';
            document.getElementById('js-overview').style.display = 'block';
            document.getElementById('js-details').style.display = 'block';
            document.getElementById('html-details').style.display = 'none';
            document.getElementById('css-details').style.display = 'none';
            break;
        case 'CSS':
            document.getElementById('js-overview').style.display = 'none';
            document.getElementById('html-overview').style.display = 'none';
            document.getElementById('css-overview').style.display = 'block';
            document.getElementById('js-details').style.display = 'none';
            document.getElementById('html-details').style.display = 'none';
            document.getElementById('css-details').style.display = 'block';
            break;
    }
}

function showHiddenList(el) {
    const hiddenUl = el.parentElement.children[1];
    switch (hiddenUl.style.display) {
        case "none":
            hiddenUl.style.display = "block";
            break;
        case "block":
            hiddenUl.style.display = "none";
    }
}

function runCode() {
    var iFrameObject = document.getElementById("iframe");
    var idoc = iFrameObject.contentDocument || iFrameObject.contentWindow;
    idoc.open();
    idoc.write("<script> " + variable_editor.getValue() + "</script>");
    idoc.close();
}


function Editor(identifer, code) {
    this.identifer = identifer;
    this.code = code;
    this.currentEditor = ace.edit(identifer);
    this.currentEditor.setTheme("ace/theme/xcode");
    this.currentEditor.session.setMode("ace/mode/javascript");
    this.currentEditor.setValue(code, 1);
    editorsMap.set(identifer, this.currentEditor);
}
