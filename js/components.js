const components = {}
components.welcomScreen = `
<h1>Welcome to Chat</h1>
`
components.loginScreen = `
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
components.registerScreen = `
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
<div id="main">
<div id="nav">
    <ul id="nav-top">
        <li class="nav-top_avata">
        </li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/2462/2462844.png" alt="">
            <span class="nav-notifi">Tin nhắn</span>
        </li>
        <li><img src="https://cdn-icons.flaticon.com/png/512/2915/premium/2915736.png?token=exp=1650249775~hmac=3fcc0a9e185fa1fee6e83da41f8cf7de"
                alt="">
            <span class="nav-notifi">Danh bạ</span>
        </li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png" alt="">
            <span class="nav-notifi">Thông báo</span>
        </li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/25/25643.png" alt="">
            <span class="nav-notifi">To-DO</span>
        </li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/711/711245.png" alt="">
            <span class="nav-notifi">Zavi</span>
        </li>
    </ul>
    <ul id="nav-bottom">
        <li><img src="https://cdn-icons-png.flaticon.com/128/2929/2929984.png" alt="">
            <span class="nav-notifi">Cloud của tôi</span>
        </li>
        <li><img src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303088.png?token=exp=1650250025~hmac=b904dcf18a4505c88d32fbbe98c0dbd5"
                alt="">
            <span class="nav-notifi">Đánh dấu</span>
        </li>
        <li id="setting"><img src="https://cdn-icons-png.flaticon.com/128/503/503849.png" alt="">
            <span class="nav-notifi">Cài đặt</span>
            <ul class="setting">
                <li>Đăng xuất</li>
                <li>Thoát</li>
            </ul>
        </li>
    </ul>
</div>
<div id="online">
    <div class="online-chat">
        <div class="online-chat_search">
            <div class="seacrh-people">
                <img src="https://cdn-icons-png.flaticon.com/512/16/16492.png" alt="">
                <input type="search" placeholder="Tìm kiếm">
            </div>
            <div class="add-people">
                <img src="https://cdn-icons.flaticon.com/png/128/6199/premium/6199722.png?token=exp=1650252750~hmac=3362d70644b1e3bcbbccbc14acb8a89c"
                    alt="">
            </div>
            <div class="add-people">
                <img src="https://cdn-icons-png.flaticon.com/128/33/33308.png" alt="">
            </div>
        </div>
        <div class="online-mess">
        
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
            <div class="peopel-mess">
                <div class="peopel-avata">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/7823.jpg" alt="">
                </div>
                <div class="peopel-chat">
                    <h1>Tên người dùng</h1>
                    <p>name: <span>Tin nhắn hiển thị</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="chat">
    <div id="chat-main">
        <div class="chat-container">
          <div class="container">
            <header>
              <img src="../images/baymax.jpg" />
              <h3>Message</h3>
            </header>
            <div id="chatplayground">
              <div id="instruction">
                <img src="../images/baymax.jpg" />
              </div>
              <div id="typing-indicator">
                <div class="avatar">
                  <img src="../images/baymax.jpg" alt="">
                </div>
                <div id="typeAndSend">
                  <input type="text" id="typeContent" autocomplete="off" placeholder="Nhập thông tin vào đây...">
                  <button disabled id="btn_send" class="btn">
                    <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                      <path id="telegram-1"
                        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                    </svg>
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

</div>

`