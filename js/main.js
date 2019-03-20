var editorsMap = new Map();

function ready() {
    setupEditor();
}

function setupEditor() {

    new Editor(
        "js-object-editor",
        `// Object Literal
var Car = {
    brand: 'Toyota',
    color: 'black',
    doors: 5,
    start: function(){
        alert("Starting...");
    }
};
    
alert(Car.brand, Car.start());
    
    
//The same example as above but using [Object constructors function]
function Car(brand, color, doors){
    this.brand=brand;
    this.color=color;
    this.doors=doors;
    
    function start() {
        alert("Starting...");
    }
}
    
let myCar = new Car("Audi", "black", 5);
myCar.start();`
    );

    new Editor(
        "js-condition-editor",
        ` let n = 5;

if(n>5){
    alert("Greater then 5");
} else {
    alert("Less or equal...");
}

//another way to write if/else statement
(n>5) ? alert("Greater") : alert("Less then");`,
        1
    );

    new Editor(
        "js-switch-editor",
        `var day = 4;

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
    
    alert(day); //what value should have day variable ?`,
        1
    );

    new Editor(
        "js-dowhile-editor",
        `var result = "";
var i = 0;
    
do {
    i = i + 1;
    result = result + i;
} while (i < 5);
    
alert(result);
// expected result: "12345"`,
        1
    );

    new Editor(
        "js-forin-editor",
        `var text = "";
var car = { brand: "Audi", color: "black", doors: 5 };
    
for (var prop in obj) {
    text += obj[prop]+ " ";
}
    
alert(text);
// expected output: "Audi black 5"`,
        1
    );

    new Editor(
        "js-for-editor",
        `for(let i=0; i<10; i++){
alert(i);
}`,
        1
    );

    new Editor(
        "js-forof-editor",
        `var iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  alert(value);
}
// 11 21 31

iterable = 'boo';

for (let value of iterable) {
  alert(value);
}

//"b"
//"o"
//"o"

`,
        1
    );

    new Editor(
        "js-function-editor",
        `// Function Declaration
function firstFunction(parameters){
    statements
}

// Function with params
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  alert(param1, param2);
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

alert(sum(2, 6));
`,
        1
    );

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
`,
        1
    );

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

`,
        1
    );

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

`,
        1
    );

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
    alert(this._name + ' is walking.');
  }
}
         
let bob = new Person('Bob');
alert(bob.name);  // Outputs 'BOB'

`,
        1
    );

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

`,
        1
    );

    new Editor(
        "js-global-scope-editor", `var test = "I'm the test";

// we can use "test" here
console.log(test);
function myFunction() {
    
  // also we can use "test" here 
  console.log(test);
}

myFunction();
  `, 1);

    new Editor(
        "ctx-editor", `drink = 'wine';

var foo = {
  drink: "beer",
  getDrink: function(){
    return drink;
  }    
};

console.log( foo.getDrink() ); //what should see here ?

`, 1);

    new Editor(
        "ctx-editor-1", `drink = 'wine';

var foo = {
  drink: "beer",
  getDrink: function(){
    return this.drink;
  }    
};

console.log( foo.getDrink() );

`, 1);

    new Editor(
        "ctx-editor-2", `drink = 'wine';

var foo = {};
 
foo.drink = "beer";
   
foo.getDrink = function(){
  return this.drink; // 'this' refers to the object "foo"
};
   
console.log( foo.getDrink() );

`, 1);

    new Editor(
        "this-function-editor", `function myFunction() {
  console.log(this);
  return this;
}

myFunction();
`, 1);

    new Editor(
        "this-object-editor", `var person = {
  firstName: "John",
  lastName: "Doe",
  myFunction: function() {
    return this;
  }
};

console.log(person.myFunction());
`, 1);

    new Editor(
        "this-object-method-editor", `var person = {
  firstName: "John",
  lastName: "Doe",
  myFunction: function() {
    return this;
  },
  fullName : function() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
`, 1);

    new Editor(
        "this-alone-editor", `var x = this;
console.log(x);
`, 1);

    new Editor(
        "js-math-editor", `// test your code here`, 1);

    new Editor(
        "this-alone-editor", `var x = this;
console.log(x);
`, 1);
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

function runCode(event) {
    var editorElement = event.target.parentNode.getElementsByClassName("ace_editor")[0];
    var resultElement = event.target.parentNode.getElementsByClassName("result")[0];
    var resultLabel = event.target.parentNode.getElementsByTagName("label")[0];
    resultLabel.style = "display:block";
    resultElement.innerHTML = "";
    console.log = function (message) {
        resultElement.innerHTML += message + "</br>";
    };

    var identifier = editorElement.getAttribute("id");
    var editor = editorsMap.get(identifier);
    eval(editor.getValue());
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

function htmlcss() {
    $(".css-container textarea").focus(function () {
        var $this = $(this);

        var frame = $this
            .parent()
            .parent()
            .parent()
            .children(".css-output")
            .children(".css-iframe"),
            contents = frame.contents(),
            body = contents.find("body"),
            styleTag = contents
                .find("head")
                .append("<style></style>")
                .children("style");

        $this.keyup(function () {
            if ($this.attr("class") === "css-htmliframe") {
                body.html($this.val());
            } else {
                styleTag.text($this.val());
            }
        });
    });
}


function createSummary() {
    $("h2").each((index, element) => {
        if ($(element).hasClass('ignore-summary')) {
            return;
        }
        const id = $(element).text().replace(/[^a-z0-9+]+/gi, '') + getRandomInt(99999);
        $(element).attr('id', id);
        const list = $("<li></li>").html(`<a href="#${id}">${$(element).text()}</a>`);
        const sublist = $('<ul></ul>').addClass('arrow');

        $(element).parent().find('h3').each((index, subElement) => {
            if ($(element).hasClass('ignore-summary')) {
                return;
            }
            const id = $(subElement).text().replace(/[^a-z0-9+]+/gi, '') + getRandomInt(9999);
            $(subElement).attr('id', id);
            sublist.append(`<li><a href="#${id}">${$(subElement).text()}</a></li>`)
        });

        if (sublist.children().length > 0) {
            const newLi = $("<li></li>").append(sublist);
            list.append(newLi);
        }
        $("#rightNav").append(list);
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function applyInlineStyle(){
    let codeList = document.getElementsByTagName("code");
    codeList.forEach(codeElement => {
        if(codeElement.parentElement){
            console.log("pre");
        }
    });
}