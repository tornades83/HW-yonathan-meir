const mainDiv = document.getElementById("main");
const Categories = [
    { value: "", Text: "choose a category--" },
    { value: "sport", Text: "sport", active: true },
    { value: "clasic", Text: "clasic", active: true },
    { value: "Business", Text: "Business", active: true },
    { value: "luxury", Text: "luxury", active: true },
    { value: "exclusiv", Text: "exclusiv", active: true }
];
const carburant = [
    { value: "", Text: "choose a carburant--" },
    { value: "Diesel", Text: "Diesel", active: true },
    { value: "Hybride (SP95)", Text: "Hybride (SP95)", active: true },
    { value: "SP95", Text: "SP95", active: true },
    { value: "Electrique", Text: "Electrique", active: true }
];


class  createForm() {
    constructor
    this.model = new myInput("model-input", "Enter the model name", "texte");
    this.brand = new myInput("brand-input", "Enter the brand name", "texte");
    this.price = new myInput("price-input", "Enter the price", "number");
    this.categories = new mySelect("category-select", "", Categories);
    this.carburant = new mySelect("carburant-select", "", carburant);
    this.sale = new myInput("sale-input", "", "checkbox", "form-check-input");
    this.btn = myButton("submit", "btn-primary", "add this product", addProduct)
    this.formDiv = document.getElementById("form-div");
    formDiv.append(model.div, brand.div, price.div, categories.div, carburant.div, sale.div, btn);
    function addProduct() {
        var obj = {};
        obj.model = model.input.value;
        obj.brand = brand.input.value;
        obj.price = price.input.value;
        obj.categories = categories.select.value;
        obj.carburant = carburant.select.value;
        if (validateForm(obj)) {
            product.push(obj);
            createCard(obj);
            model.input.value = "";
            brand.input.value = "";
            price.input.value = "";
            categories.select.value = "";
            carburant.select.value = "";
        }
    }
}
    function validateForm(x) {
        var valid = true;
        if (!x.brand) {
            brand.input.classList.add("border border-danger");
            valid = false;
        } else {
            brand.input.classList.remove("border", "border-danger");

        }
        if (!x.model) {
            model.input.classList.add("border", "border-danger");
            valid = false;
        } else {
            model.input.classList.remove("border", "border-danger");
        }
        if (!x.price) {
            price.input.classList.add("border", "border-danger");
            valid = false;
        } else {
            price.input.classList.remove("border", "border-danger");
        }
        if (!x.categories) {
            categories.select.classList.add("border", "border-danger");
            valid = false;
        } else {
            categories.select.classList.remove("border", "border-danger");
        }
        if (!x.carburant) {
            carburant.select.classList.add("border", "border-danger");
            valid = false;
        } else {
            carburant.select.classList.remove("border", "border-danger");
        return valid;
    }
    function createCard(obj) {
        var article = document.createElement("article");
        article.className = "grid-item";
        var h3 = document.createElement("h3");
        h3.className = "brand-name";
        h3.innerText = obj.brand;
        var h4 = document.createElement("h4");
        h4.innerText = obj.model;
        var p = document.createElement("p");
        p.innerText = obj.categories;
        var h2 = document.createElement("h2");
        h2.innerText = obj.carburant;
        h4.className = "model-item";
        var btn = myButton(
            "",
            "btn btn-success",
            obj.price,
            buyNow,
            "fa-basket-shoppimg"
        );
        article.append(h3, h4, p, h2, btn);
        mainDiv.append(article);

    }
    function buyNow() {
        console.log(this);
        this.parentElement.parentElement.style.backgrondColor = "pink";
        // this.parentElement.parentElement.remove();
    }
    class myInput {
        constructor(_id, _placeholder, _type, _class = "") {
    
            this.div = document.createElement("div");
            this.input = document.createElement("input");
            this.input.className = "form-control" + _class;
            this.input.id = _id;
            this.input.placeholder = _placeholder;
            this.input.type = _type;
            this.div.append(this.input);
        }
    }
    class mySelect {
        constructor(_id, _class = "", _arr) {
            this.div = document.createElement("div");
            this.select = document.createElement("select");
            this.select.className = "form-select" + _class;
            this.select.id = _id;
            for (let i = 0; i < _arr.length; i++) {
    
                const opt = _arr[i];
                if (opt.active) {
                    var option = document.createElement("option");
                    option.value = opt.value;
                    option.innerText = opt.Text;
                    this.select.append(option);
                }
            }
            this.div.append(this.select);
        }
    }
    function myButton(_class = "", _id, _texte, _callback, _icone) {
        var div = document.createElement("div");
        var btn = document.createElement("button");
        if (_icone) {
            var i = document.createElement("i");
            i.className = "fa-solid" + _icone;
            btn.append(i);
        }
        var span = document.createElement("span");
        span.innerText = _texte;
        btn.className = "btn" + _class;
        btn.id = _id;
        btn.append(span);
        btn.addEventListener("click", _callback);
        div.append(btn);
        return div;
    }
}