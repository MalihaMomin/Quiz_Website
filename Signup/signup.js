var form = document.querySelector("form")

var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var pn = document.getElementById("ph")
var pass = document.querySelector("#pass")
var passIcon = document.querySelector("#passIcon")
var cpass = document.querySelector("#cpass")
var cpassIcon = document.querySelector("#cpassIcon")

var efname = document.getElementById("efname")
var elname = document.getElementById("elname")
var eemail = document.getElementById("eemail")
var eph = document.getElementById("eph")
var epass = document.getElementById("epass")
var ecpass = document.getElementById("ecpass")

var signup = document.querySelector("button")

var storage = []
var local = JSON.parse(localStorage.getItem("signup"))
if(local) {
    storage = local
}

form.addEventListener("submit", (e)=>{
    var flag = true
    //----------------------- First Name ---------------------------
    var regx = /^[a-zA-Z]{2,15}$/
    if(fname.value == ""){
        efname.innerHTML = "*first name required"
        flag = false
    }
    else if(regx.test(fname.value)) {
        efname.innerHTML = ""
    }
    else {
        efname.innerHTML = "*invalid first name"
        flag=false
    }

    //----------------------- Last Name ---------------------------
    if(lname.value == "") {
        elname.innerHTML = "*last name required"
        flag = false
    }
    else if(regx.test(lname.value)) {
        elname.innerHTML = ""
    }
    else {
        elname.innerHTML = "*invalid last name"
        flag = false
    }

    //----------------------- Email ---------------------------
    if(email.value == "") {
        eemail.innerHTML = "*email required"
        flag = false
    }
    else {
        eemail.innerHTML = ""
    }

    //----------------------- Phone Number ---------------------------
    var regx2 = /^[6,7,8,9][0-9]{9}$/
    if(ph.value == "") {
        eph.innerHTML = "*phone number required"
        flag = false
    }
    else if(regx2.test(ph.value)) {
        eph.innerHTML = ""
    }
    else {
        eph.innerHTML = "*invalid phone number"
        flag = false
    }

    //----------------------- Password -------------------------------
    var regx3 = /^[a-zA-Z0-9@$_#%!&*]{8,15}$/
    if(pass.value == "") {
        epass.innerHTML = "*password required"
        flag = false
    }
    else if(regx3.test(pass.value)) {
        epass.innerHTML = ""
    }
    else {
        epass.innerHTML = "*invalid password"
        flag = false
    }

    //----------------------- Confirm Password -----------------------
    if(cpass.value == "") {
        ecpass.innerHTML = "*confirm the password"
        flag = false
    }
    else if(cpass.value == pass.value) {
        ecpass.innerHTML = ""
    }
    else {
        ecpass.innerHTML = "*password not matching"
        flag = false
    }

    if(flag) {
        var obj = {
            firstname: fname.value,
            lastname: lname.value,
            emailid: email.value,
            phone: ph.value,
            password: pass.value
        }
        storage.push(obj)
        localStorage.setItem("signup", JSON.stringify(storage))
    }
    else {
        e.preventDefault()
    }
})

passIcon.addEventListener("click", ()=>{
    togglePassword(pass, passIcon)
})

cpassIcon.addEventListener("click", ()=>{
    togglePassword(cpass, cpassIcon)
})

function togglePassword(pass, passIcon) {
    if(pass.getAttribute("type") === "password") {
        pass.setAttribute("type", "text")
        passIcon.classList.remove("fa-eye-slash")
        passIcon.classList.add("fa-eye")
    }
    else if(pass.getAttribute("type") === "text") {
        pass.setAttribute("type", "password")
        passIcon.classList.remove("fa-eye")
        passIcon.classList.add("fa-eye-slash")
    }
}