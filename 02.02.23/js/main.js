const obj = {
    activate: document.createElement("button"),
    zero: document.createElement("button"),
    one: document.createElement("button"),
    two: document.createElement("button"),
    three: document.createElement("button"),
    four: document.createElement("button"),
    five: document.createElement("button"),
    six: document.createElement("button"),
    seven: document.createElement("button"),
    eight: document.createElement("button"),
    nine: document.createElement("button")
}
const password = ["2", "6", "8", "4"];

function init() {
    
   var activ = document.getElementById("main");
   activ.append(obj);
    // obj.main.append(obj.activate, obj.one, obj.two, obj.three, obj.four, obj.five, obj.six, obj.seven, obj.eight, obj.nine, obj.zero);
} var button = document.createElement("button");
main.innerHTML = `
 <div class="row">
      <div class="col-md-3 offset-md-4">
        <div class="haut">
          <button type="button" class="btn btn-primary">1</button>
          <button type="button" class="btn btn-primary">2</button>
          <button type="button" class="btn btn-primary">3</button>
        </div>
        <div class="milieu">
          <button type="button" class="btn btn-primary">4</button>
          <button type="button" class="btn btn-primary">5</button>
          <button type="button" class="btn btn-primary">6</button>
        </div>
        <div class="bas">
          <button type="button" class="btn btn-primary">7</button>
          <button type="button" class="btn btn-primary">8</button>
          <button type="button" class="btn btn-primary">9</button>
        </div>
        <div class="zero"></div>
        <button type="button" class="btn btn-primary">0</button>

      </div>
    </div>
`;


function activate() {
    var obj = {};
    obj.activate.removeEventListener("click", Timer.activate)
    obj.one.addEventListener("click", Timer.one)
    obj.two.addEventListener("click", Timer.two)
    obj.three.addEventListener("click", Timer.three)
    obj.four.addEventListener("click", Timer.four)
    obj.five.addEventListener("click", Timer.five)
    obj.six.addEventListener("click", Timer.six)
    obj.seven.addEventListener("click", Timer.seven)
    obj.eight.addEventListener("click", Timer.eight)
    obj.nine.addEventListener("click", Timer.nine)
    obj.zero.addEventListener("click", Timer.zero)
    console.log("STARTED");
}

function haut() {
    if (true) {
        haut = "btn btn-success";
    } else (false)
    haut = "btn btn-danger";
    setTimeout(function () {
        x++;
    }, 1000);
    finalOperation();
}
function milieu() {
    if (true) {
        milieu = "btn btn-success";
    } else (false)
    milieu = "btn btn-danger";
    setTimeout(function () {
        x++;
    }, 1000);
    finalOperation();
}
function bas() {
    if (true) {
        bas = "btn btn-success";
    } else (false)
    bas = "btn btn-danger";
    setTimeout(function () {
        x++;
    }, 1000);
    finalOperation();
}
function zero() {
    if (true) {
        zero = "btn btn-success";
    } else (false)
    zero = "btn btn-danger";
    setTimeout(function () {
        x++;
    }, 1000);
    finalOperation();
}


// function one() {
//     if (true) {
//         one.Style.color = "btn btn-success";
//     } else (false)
//     one.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function two() {
//     if (true) {
//         two.Style.color = "btn btn-success";
//     } else (false)
//     two.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function three() {
//     if (true) {
//         three.Style.color = "btn btn-success";
//     } else (false)
//     three.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function four() {
//     if (true) {
//         four.Style.color = "btn btn-success";
//     } else (false)
//     four.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function five() {
//     if (true) {
//         five.Style.color = "btn btn-success";
//     } else (false)
//     five.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function six() {
//     if (true) {
//         six.Style.color = "btn btn-success";
//     } else (false)
//     six.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function seven() {
//     if (true) {
//         seven.Style.color = "btn btn-success";
//     } else (false)
//     seven.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function eight() {
//     if (true) {
//         eight.Style.color = "btn btn-success";
//     } else (false)
//     eight.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function nine() {
//     if (true) {
//         nine.Style.color = "btn btn-success";
//     } else (false)
//     nine.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }
// function zero() {
//     if (true) {
//         zero.Style.color = "btn btn-success";
//     } else (false)
//     zero.Style.color = "btn btn-danger";
//     setTimeout(function () {
//         x++;
//     }, 1000);
//     finalOperation();
// }

init()














// function one  () {

//     if(something) {
//         y ++;
//         callAFunction("click");
//     }else {
//         setTimeout(function () {
//         x ++;
//         },1000 );
//         doSomethingElse ();
//     }
//     finalOperation ();
// }





