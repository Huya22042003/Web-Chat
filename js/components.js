const components = {}
components.welcomScreen= `
<h1>Welcome to Chat</h1>
`
components.loginScreen=`
<div id="login_main">
      <div class="login-containr">
        <div class="login_right">
            <div class="header">
                <h3>XTP Chat</h3>
            </div>
            <form class="login-form">
                <div class="input-wrapper">
                    <input type="text" 
                      placeholder="Email" 
                      id="email">
                    <div class="error" id="email-error"></div>
                  </div>
                  <div class="input-wrapper">
                    <input type="password" 
                      placeholder="Password" 
                      id="password">
                    <div class="error" 
                      id="password-error"></div>
                  </div>
                  <div class="form-action">
                    <span class="cursor-pointer" id="redirect-to-register">
                      Don't have an account? Register
                    </span>
                    <button class="btn" type="submit" id="login">
                      Login
                    </button>
                  </div>
            </form>
        </div>
      </div>
    </div>
`
components.registerScreen=`
<div id="login_main">
  <div class="register-containr">
        <div class="login_right">
            <div class="header">
                <h3>XTP Chat</h3>
            </div>
            <form class="login-form">
                <div class="input-wrapper">
                    <input type="text" 
                      placeholder="Name" 
                      id="name">
                    <div class="error" id="name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="email" 
                      placeholder="Email" 
                      id="email">
                    <div class="error" 
                      id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" 
                      placeholder="Password" 
                      id="password">
                    <div class="error" 
                      id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" 
                      placeholder="Password" 
                      id="enterPw">
                    <div class="error" 
                      id="enterPw-error"></div>
                </div>
                <div class="form-action">
                    <span class="cursor-pointer" id="redirect-to-register">
                      Don't have an account? Register
                    </span>
                    <button class="btn" type="submit" id="login">
                      Login
                    </button>
                </div>
            </form>
        </div>
        
    </div>
</div>
`
components.chatScreen = `
<h1>Chat</h1>
`