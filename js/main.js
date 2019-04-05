var editorsMap = new Map();

function ready() {
    setupEditor();
}

function setupEditor() {

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