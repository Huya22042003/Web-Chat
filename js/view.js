const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "loginScreen" :
            document.getElementById("app").innerHTML = components.loginScreen
            document.getElementById("redirect-to-register").addEventListener("click", ()=>{
                view.setActiveScreen("registerScreen")
            })
            document.getElementById("login").addEventListener("click",() => {
                view.setActiveScreen("chatScreen")
            })
            conrtroller.errLogign()
            break;
        case "registerScreen" :
            document.getElementById("app").innerHTML = components.registerScreen
            document.getElementById("redirect-to-register").addEventListener("click", () => {
                view.setActiveScreen("loginScreen")
            })
            conrtroller.errLogign()
            conrtroller.errRegister()
            break;  
        case "chatScreen" :
            document.getElementById("app").innerHTML = components.chatScreen
            conrtroller.setting()
            conrtroller.add()
            document.getElementById("signOut").addEventListener("click",()=> {
                view.setActiveScreen("loginScreen")
            })
            break;
    }
}


