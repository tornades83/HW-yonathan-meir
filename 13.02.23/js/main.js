class row {
    constructor(_id, _class, _cols) {
        this.row = document.createElement("div");
        this.row.className = "row ";
        if (_id) this.row.id = _id;
        if (_class) this.row.className += _class;
        _cols.forEach((x) => {
            this.row.append(x.col);
        });
    }
}

class col {
    constructor(_id, _class) {
        this.col = document.createElement("div");
        this.col.className = "col ";
        if (_id) this.col.id = _id;
        if (_class) this.col.className += _class;
    }
}

class input {
    constructor(_id, _class, _label, _type, _placeholder = "") {
        this.div = document.createElement("div");
        this.div.className = "input-field col ";
        if (_class) this.div.className += _class;
        this.input = document.createElement("input");
        this.input.id = _id;
        this.input.type = _type;
        this.input.placeholder = _placeholder;
        this._label = document.createElement("label");
        this._label.for = _id;
        this._label.innerText = _label;
        this.div.append(this.input, this.label);
    }
}

class button {
    constructor(_id, _class, _icon, _text) {
        this.btn = document.createElement("a");
        this.btn.className = "waves-effect waves-light btn ";
        if (_id) this.btn.id = _id;
        if (_class) this.btn.className += _class;
        if (_icon) {
            this.i = document.createElement("i");
            this.i.className = "material-icons left";
            this.i.innerText = _icon;
            this.btn.append(this.i);
        }
        this.span = document.createElement("span");
        this.span.innerText = _text;
        this.btn.append(this.span);
    }
}

var colArr = [];
colArr.push(new col("", "s4"));
colArr.push(new col("", "s4"));
colArr.push(new col("", "s4"));

var sectionLogin = new row("", "", colArr);
document.getElementById("main").append(sectionLogin.row);

var emailInput = new input("", "s6", "Your email", "email", "ex: jon@mail.com");
var passInput = new input("", "s6", "Your password", "password", "ex: sOstrONG@123");
var loginBtn = new input("", "col s12", "check", "LOGIN");

colArr[1].col.append(emailInput.div, passInput.div, loginBtn.btn);

var userArray = [];
var userJSON = localStorage.getItem("theUsers");
var userArray = JSON.parse(userJSON);
var userJSON = localStorage.getItem("theUsers");
if (userJSON != null) {
    userArray = JSON.parse(userJSON);
}
