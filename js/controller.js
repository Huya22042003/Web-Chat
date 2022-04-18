const conrtroller= {}
function test(a,b,c,d) {
    if(!a.value.match(b)) {
        c.innerHTML = "Bạn phải nhập "+d
        c.style.color="red"
    } else {
        c.innerHTML = "Nhập đúng"
        c.style.color="green"
    }
}

conrtroller.errLogign = () => {
    // variable email
    let email =document.getElementById('email')
    let testEmail = /\w+@\w+(\.\w+){1,2}/
    let showEmail = document.getElementById("email-error")
    // variable password
    let password = document.getElementById("password")
    let testPass = /.{6,}/
    let showPass = document.getElementById("password-error")

    // Email
    email.addEventListener("keyup",()=> {
        test(email,testEmail,showEmail,"Đúng định dạng email")
    })
 
    // password
    password.addEventListener("keyup", () => {
        test(password,testPass,showPass,"6 ký tự")
    })
}

conrtroller.errRegister = () => {
    // variable name
    let name = document.getElementById("name")
    let testName = /[a-zA-Z ]+/
    let showName = document.getElementById("name-error")
    // enter the password
    let enterPw = document.getElementById("enterPw")
    let showEnterPw = document.getElementById("enterPw-error")
    let password = document.getElementById("password")
    // name
    name.addEventListener("keyup" , () => {
        test(name,testName,showName,"nhập ký tự chữ")
        function toUpp(name) {
            let arr = name.toLowerCase().split(" ")
            const result = arr.map((string, index, array) => {
                return string.substr(0,1).toUpperCase() + string.substr(1);
            })
            return result.join(" ")
        }
        name.value=toUpp(name.value)
    })
    
    // enter the password
    enterPw.addEventListener("keyup", () => {
        if(enterPw.value!=password.value) {
            showEnterPw.innerHTML="Bạn phải nhập giống password"
            showEnterPw.style.color="red"
        } else {
            showEnterPw.innerHTML = "Nhập đúng"
            showEnterPw.style.color="green"
        }
    })
}

conrtroller.setting = () => {
    let dem = 0
    document.getElementById("setting").addEventListener("click",() => {
        dem++;
        if(dem%2==0) {
            document.querySelector(".setting").style.display="none"
        } else {
            document.querySelector(".setting").style.display="block"
        }
    })     
}