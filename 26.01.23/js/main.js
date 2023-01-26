const Categories = [
    { value: "", Text: "choose a category--" },
    { value: "sport", Text: "sport" },
    { value: "casual", Text: "casual" },
    { value: "evenimg", Text: "evenimg" },
    { value: "relax", Text: "relax" },
];
const product = [
]
createForm();
function createForm() {
    var model = myInput("model-input", "Enter the model name", "texte");
    var brand = myInput("brand-input", "Enter the brand name", "texte");
    var price = myInput("price-input", "Enter the price", "number");
    var categories = mySelect("category-select", "", Categories)
    var sale = myInput("sale-input", "", "checkbox", "form-check-input");
    var btn = myButton("submit", "", "add this product", addProduct)
    var formDiv = document.getElementById("form-div");
    formDiv.append(model.div, brand.div, price.div, categories.div, sale.div, btn);
    function addProduct() {
        var obj = {};
        obj.model = model.input.value;
        obj.brand = brand.input.value;
        obj.price = price.input.value;
        obj.categories = categories.select.value;
        if (obj.model && obj.brand && obj.price && obj.categories) {
            product.push(obj);
            model.input.value = "";
            brand.input.value = "";
            price.input.value = "";
            categories.input.value = "";
        } else {
             redBorder = obj ;
        }
    }
    function redBorder(obj) {
        obj.redBorder.input = invalid(obj.model.length == 0 && obj.brand.length == 0 && obj.price.length == 0) ;
        var border = 2, dashed, red;
        
        obj.redBorder.input = valid(obj.model.length && obj.brand.length && obj.price.length) ;
        var border = 1, solid, black;
        
        return obj;

    }
}

function myInput(_id, _placeholder, _type, _class = "") {
    var obj = {};
    obj.div = document.createElement("div");
    obj.input = document.createElement("input");
    obj.input.className = "form-control" + _class;
    obj.input.id = _id;
    obj.input.placeholder = _placeholder;
    obj.input.type = _type;
    obj.div.append(obj.input);
    return obj;
}
function mySelect(_id, _class = "", _arr) {
    var obj = {}
    obj.div = document.createElement("div");
    obj.select = document.createElement("select");
    obj.select.className = "form-select" + _class;
    obj.select.id = _id;
    for (let i = 0; i < _arr.length; i++) {
        const opt = _arr[i];
        var option = document.createElement("option");
        option.value = opt.value;
        option.innerText = opt.Text;
        obj.select.append(option);
    }
    obj.div.append(obj.select);
    return obj;
}
function myButton(_class = "", _id, _texte, _callback) {
    var div = document.createElement("div");
    var btn = document.createElement("button");
    btn.className = "btn btn-success " + _class;
    btn.id = _id;
    btn.innerText = _texte;
    btn.addEventListener("click", _callback);
    div.append(btn);
    return div;
}
