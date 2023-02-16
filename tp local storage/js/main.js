localStorage.clear();

class User {
    constructor(_fName, _lName, _email, _password) {
      this.fName = _fName;
      this.lName = _lName;
      this.email = _email;
      this.password = _password;
      this.dateCreated = Date.now();
      this.token = createToken(10);
    }
  }
  
  
  function createToken(qty) {
    var token = "";
    for (let i = 0; i < qty; i++) {
      token += (Math.random() + 10).toString(36).substring(2);
    }
    return token;
  }
  
  const HTML = {
    toggleBtn: document.getElementById("choice-text"),
    register: {
      form: document.getElementById("register"),
      fName: document.getElementById("firstName"),
      lName: document.getElementById("lastName"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      btn: document.getElementById("register-btn"),
    },
    login: {
      form: document.getElementById("login"),
      email: document.getElementById("emailLogin"),
      password: document.getElementById("passwordLogin"),
      btn: document.getElementById("login-btn"),
    },
  };
  
  HTML.toggleBtn.addEventListener("click", function () {
    if (HTML.login.form.style.display == "none") {
      HTML.login.form.style.display = "block";
      HTML.register.form.style.display = "none";
      this.innerText = "Don't have an account yet?";
    } else {
      HTML.login.form.style.display = "none";
      HTML.register.form.style.display = "block";
      this.innerText = "Already have an account?";
    }
  });
 
  let count = 0;
  HTML.register.btn.addEventListener("click", function () {
    var x = HTML.register;
    var user = new User(
      x.fName.value,
      x.lName.value,
      x.email.value,
      x.password.value
    );
    count++;
    let str = "user" + count.toString();
    localStorage[str] = JSON.stringify(user);
console.log(user);
   
  });
  
  
    

  
  HTML.login.btn.addEventListener("click", function() {
    var user = localStorage.user
    if(user) {
        var x = HTML.login
        user = JSON.parse(user)
        if(user && 
            user.email && 
             user.password && 
             user.email == x.email.value &&
              user.password == x.password.value ) {
                alert("all is good") 
              }
        return
  
    }
    alert("wrong credentials")
  } )
//   localStorage[str] = JSON.parse(user);