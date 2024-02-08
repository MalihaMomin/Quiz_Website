var form = document.querySelector("form")

var email = document.getElementById("email")
var pass = document.getElementById("pass")
var passIcon = document.getElementById("passIcon")

var eemail = document.getElementById("eemail")
var epass = document.getElementById("epass")
var elogin = document.getElementById("elogin")

var storage = []
storage = JSON.parse(localStorage.getItem("signup"))
var credentials = ()=>{
    var match = storage.find((e)=>{
        if(((email.value == e.emailid) || (email.value == e.phone)) && (pass.value == e.password)) {
            return true
        }
    })
    return match
} 

form.addEventListener("submit", (e)=>{
    eemail.innerHTML = ""
    epass.innerHTML = ""
    elogin.innerHTML = ""

    var flag = true
    if(email.value == "" && pass.value == "") {
        eemail.innerHTML = "*email required"
        epass.innerHTML = "*password required"
        flag = false
    }
    else if(email.value == "") {
        eemail.innerHTML = "*email required"
        flag = false
    }
    else if(pass.value == "") {
        epass.innerHTML = "*password required"
        flag = false
    }
    else if(credentials()) {
        alert("Welcome to the MCQ Portal!")
    }
    else {
        elogin.innerHTML = "*invalid email or password"
        flag = false
    }

    if(!flag) {
        e.preventDefault()
    }
})

passIcon.addEventListener("click", ()=>{
    if(pass.getAttribute("type") == "password") {
        pass.setAttribute("type", "text")
        passIcon.classList.remove("fa-eye-slash")
        passIcon.classList.add("fa-eye")
    }
    else {
        pass.setAttribute("type", "password")
        passIcon.classList.remove("fa-eye")
        passIcon.classList.add("fa-eye-slash")
    }
})