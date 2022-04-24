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
<div id="main" class="d-flex">
        <div id="nav" class="height j-space-bet d-flex j-a-center text-align-cennet posotion-fixe flex-dic">
            <ul id="nav-top">
                <li class="nav-top_avata">
                </li>
                <li><img src="../images/mess.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Tin nhắn</span>
                </li>
                <li><img src="../images/phone-book.png"
                        alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Danh bạ</span>
                </li>
                <li><img src="../images/notifi.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Thông báo</span>
                </li>
                <li><img src="../images/checked.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">To-DO</span>
                </li>
                <li><img src="../images/video_Call.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Zavi</span>
                </li>
            </ul>
            <ul id="nav-bottom">
                <li><img src="../images/Cloud.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Cloud của tôi</span>
                </li>
                <li><img src="../images/star.png"
                        alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Đánh dấu</span>
                </li>
                <li id="setting"><img src="../images/setting.png" alt="">
                    <span class="nav-notifi bottom d-none posotion-ab back-ground-black color-white">Cài đặt</span>
                    <ul class="setting d-none back-ground-white color-black posotion-ab">
                        <li id="signOut">Đăng xuất</li>
                        <li id="close">Thoát</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="online">
            <div class="online-chat">
                <div class="online-chat_search d-flex top back-ground-white posotion-fixe j-space-ar">
                    <div class="seacrh-people d-flex">
                        <img src="../images/search.png" alt="" class="seacrh-people">
                        <input type="search" placeholder="Tìm kiếm" class="width height">
                    </div>
                    <div class="add-people cur-po">
                        <img src="../images/account.png" alt="">
                    </div>
                    <div class="add-people cur-po">
                        <img src="../images/peopels.png" alt="">
                    </div>
                </div>
                <div class="online-mess">
                
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
                        </div>
                        <div class="peopel-chat">
                            <h1>Tên người dùng</h1>
                            <p>name: <span>Tin nhắn hiển thị</span></p>
                        </div>
                    </div>
                    <div class="peopel-mess d-flex">
                        <div class="peopel-avata">
                            <img src="../images/avata.jpg" alt="" class="width">
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
                    <header class="posotion-fixe top width d-flex text-align-cennet back-ground-white">
                      <img src="../images/baymax.jpg" class="height"/>
                      <h3 class="color-black">Message</h3>
                    </header>
                    <div id="chatplayground">
                      <div id="instruction" class="color-white text-align-cennet">
                        <img src="../images/baymax.jpg" />
                      </div>
                      <div id="typing-indicator">
                        <div class="avatar">
                          <img src="../images/baymax.jpg" alt="">
                        </div>
                        <div id="typeAndSend" class="d-flex posotion-fixe right bottom width">
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
        <div id="right">
        </div>
    </div>
    <div id="container_add" style="background-color: rgba(0, 0, 0, 0.3);" class="d-none d-flex margin posotion-ab j-a-center top left right bottom">
        <div id="main_add" style="height: 500px;" class="d-flex margin back-ground-white j-a-center flex-dic">
            <div class="top d-flex j-space-bet width">
                <h1>Tạo nhóm</h1>
                <span class="cur-po js-removeAdd">X</span>
            </div>
            <hr>
            
                <div class="add-friend d-flex width" style="margin: 20px;">
                    <h3>Thêm bạn</h3>
                    <input type="text" placeholder="Nhập tên" style="width: 70%; margin-left: 20px;">
                </div>
                <hr>
            <div class="talk width" style="overflow-y: scroll;height: 75%;">
                <div class="d-flex line margin">
                    <input type="checkbox" name="" id="" class="input border-radiu-50">
                    <img src="../images/avata.jpg" alt="" class="border-radiu-50">
                    <p>Ures name</p>
                </div>
                <div class="d-flex line margin">
                    <input type="checkbox" name="" id="" class="input border-radiu-50">
                    <img src="../images/avata.jpg" alt="" class="border-radiu-50">
                    <p>Ures name</p>
                </div>
                <div class="d-flex line margin">
                    <input type="checkbox" name="" id="" class="input border-radiu-50">
                    <img src="../images/avata.jpg" alt="" class="border-radiu-50">
                    <p>Ures name</p>
                </div><div class="d-flex line margin">
                    <input type="checkbox" name="" id="" class="input border-radiu-50">
                    <img src="../images/avata.jpg" alt="" class="border-radiu-50">
                    <p>Ures name</p>
                </div>
            </div>
            <div class="width">
                <button class="btn-full float-right cur-po">Thêm bạn</button>
                <button class="btn-full float-right cur-po js-removeAdd">Hủy</button>
            </div>
        </div>
    </div>
`
