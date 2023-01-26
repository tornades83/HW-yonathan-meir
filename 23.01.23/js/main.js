var appDiv = document.getElementById("main");
const Users = [
    {
        fullName: "Serge Talla",
        email: "serge@talla.com", 
        pass: "manitou.123", },
        {
            fullName: "Yonathan Roos",
            email: "yon@roos.com", 
            pass: "lerabin.123", },
            {
                fullName: "Lea Mizrahi",
                email: "lea@mizrahi.com", 
                pass: "iluvjs.123", }  
];


init();

function init()
var loginSection = document.createElement("section")
var emailDiv = document.createElement("div")
var emailLabel = document.createElement("label")
    emailLabel.inertText = "Enter your email";
var emailInput = document.createElement("input");
    emailLabel.append(emailInput);
    emailDiv.append(emailLabel);
    loginSection.append(emailDiv);

    emailInput.addEventListener("input", checkEmail);

function checkEmail() {
    if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
        passDiv.style.display = "block";
    } else {
        passDiv.style.display = "none";
    }
    passDiv = document.createElement("div");
    var passLabel = document.createElement("label");
    passLabel.innerText = "Enter your password";
    var passInput = document.createElement("input");
    passLabel.append(passInput);
    passDiv.append(passLabel);
    passDiv.style.display = "none";
    loginSection.append(passDiv);

    passInput.addEventListener("input", checkPass);

    function checkPass() {
        if (passInput.value.includes(".") && passInput.value.length > 7) {
            btnDiv.style.display = "block";
        } else {
            btnDiv.style.display = "none";
        }

    }

    var btnDiv = document.createElement("div");
    var btn = document.createElement("button");
    btn.innerText = "login please";
    btnDiv.append(btn);
    btnDiv.style.display = "none";
    loginSection.append(btnDiv);

    btn.addEventListener("click", login);

    function login() {
      for (let i = 0; i < Users.length; i++) {
        const user = Users[i];
        
     
        if (emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passDiv.value === user.pass) {
            goToDashboard(loginSection);
            return;
         
      }
        
       tries++;
        alert("wrong ");
    }
    }
    appDiv.append(loginSection)



    function goToDashboard() {
        var section = document.createElement("section");
        var h1 = document.createElement("h1");
        h1.innerText = `Welcome, dear ${user.fullName}`;
        section.append(h1);
        loginSection.remove();
        appDiv.append(section);

    }
}
