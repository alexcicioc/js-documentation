function ready() {
   setupEditor();
}

function update() {
}

function setupEditor() {
    variable_editor = ace.edit("editor");
    variable_editor.setTheme("ace/theme/xcode");
    variable_editor.session.setMode("ace/mode/javascript");
    variable_editor.setValue(`
const x = "Test";
var y = 2;
let z = true;
console.log("av");
    `, 1);


    dataType_editor = ace.edit("js-datatypes-editor");
    dataType_editor.setTheme("ace/theme/xcode");
    dataType_editor.session.setMode("ace/mode/javascript");
    dataType_editor.setValue(`typeof undefined // "undefined";

typeof 0 // "number"

typeof true // "boolean";

typeof "foo" // "string"

typeof Symbol("id") // "symbol";

typeof { property : 'value'} // "object"

typeof alert // "function"
    `, 1);

    boolean_editor = ace.edit("js-boolean-editor");
    boolean_editor.setTheme("ace/theme/xcode");
    boolean_editor.session.setMode("ace/mode/javascript");
    boolean_editor.setValue(`10>9 // "true";

const value = true;
    
const anotherValue = new Boolean(false);`, 1)

array_editor = ace.edit("js-array-editor");
array_editor.setTheme("ace/theme/xcode");
array_editor.session.setMode("ace/mode/javascript");
array_editor.setValue(`//Create an Array
var cars = ["Dacia", "Skoda"];

// You can play with the methods described above
alert(cars);
`, 1)

    number_editor = ace.edit("js-number-editor");
    number_editor.setTheme("ace/theme/xcode");
    number_editor.session.setMode("ace/mode/javascript");
    number_editor.setValue(`let integerNumber = 123; //integer

let floatingNumber = 12.345; //floating number
    
alert( 1 / 0 ); // Will result in Infinity
    
alert( -1 / 0 ); // Will result in -Infinity
    
alert("not a number" / 2); // Will result in NaN, because we try to divide string with number`, 1);

    string_editor = ace.edit("js-string-editor");
    string_editor.setTheme("ace/theme/xcode");
    string_editor.getSession().setMode("ace/mode/javascript");
    string_editor.setValue("let str = \"JavaScript\";\n\nlet str2 = 'String with single quotes';\n\nlet phrase = `can embed ${str}`", 1);

    object_editor = ace.edit("js-object-editor");
    object_editor.setTheme("ace/theme/xcode");
    object_editor.session.setMode("ace/mode/javascript");
    object_editor.setValue(`// Object Literal
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
myCar.start();`, 1)

    condition_editor = ace.edit("js-condition-editor");
    condition_editor.setTheme("ace/theme/xcode");
    condition_editor.session.setMode("ace/mode/javascript");
    condition_editor.setValue(` let n = 5;

if(n>5){
    console.log("Greater then 5");
} else {
    console.log("Less or equal...");
}

//another way to write if/else statement
(n>5) ? alert("Greater") : alert("Less then");`, 1)

    switch_editor = ace.edit("js-switch-editor");
    switch_editor.setTheme("ace/theme/xcode");
    switch_editor.session.setMode("ace/mode/javascript");
    switch_editor.setValue(`var day = 4;

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

    dowhile_editor = ace.edit("js-dowhile-editor");
    dowhile_editor.setTheme("ace/theme/xcode");
    dowhile_editor.session.setMode("ace/mode/javascript");
    dowhile_editor.setValue(`var result = "";
var i = 0;
    
do {
    i = i + 1;
    result = result + i;
} while (i < 5);
    
console.log(result);
// expected result: "12345"`, 1);

forin_editor = ace.edit("js-forin-editor");
forin_editor.setTheme("ace/theme/xcode");
forin_editor.session.setMode("ace/mode/javascript");
forin_editor.setValue(`var text = "";
var car = { brand: "Audi", color: "black", doors: 5 };
    
for (var prop in obj) {
    text += obj[prop]+ " ";
}
    
console.log(text);
// expected output: "Audi black 5"`, 1);

for_editor = ace.edit("js-for-editor");
for_editor.setTheme("ace/theme/xcode");
for_editor.session.setMode("ace/mode/javascript");
for_editor.setValue(`for(let i=0; i<10; i++){
console.log(i);
}`, 1);

forof_editor = ace.edit("js-forof-editor");
forof_editor.setTheme("ace/theme/xcode");
forof_editor.session.setMode("ace/mode/javascript");
forof_editor.setValue(`var iterable = [10, 20, 30];

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

function_editor = ace.edit("js-function-editor");
function_editor.setTheme("ace/theme/xcode");
function_editor.session.setMode("ace/mode/javascript");
function_editor.setValue(`// Function Declaration
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

functionreturn_editor = ace.edit("js-functionreturn-editor");
functionreturn_editor.setTheme("ace/theme/xcode");
functionreturn_editor.session.setMode("ace/mode/javascript");
functionreturn_editor.setValue(`
function test(){
    return true;
}
test(); // true;

function double(num){
    num*=2;
}

double(); // undefined;
`, 1);
}

function switchOverview(event){
    switch(event.text) {
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

function showHiddenList(el){
    const hiddenUl=el.parentElement.children[1];
    switch(hiddenUl.style.display){
        case "none": 
            hiddenUl.style.display = "block";
            break;
        case "block":
            hiddenUl.style.display="none";
    }
}

function runCode(){
    var iFrameObject = document.getElementById("iframe");
    var idoc = iFrameObject.contentDocument || iFrameObject.contentWindow;
    idoc.open();
    idoc.write("<script> " + variable_editor.getValue()+ "</script>");
    idoc.close();
}
