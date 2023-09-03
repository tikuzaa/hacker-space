function retract(){
    let current_mode = document.getElementById('fetch-info').textContent;
    if (current_mode == '1' ){
    document.getElementById('logo-section').innerHTML = `<i class='fas fa-less-than' onclick="show()"></i>`;
    }
    else{
        document.getElementById('logo-section').innerHTML = `<i class='fas fa-less-than' style='color: black' onclick="show()"></i>`;
    }
}

function show(){
    let current_mode = document.getElementById('fetch-info').textContent;
    if (current_mode == '1'){
    document.getElementById('logo-section').innerHTML =`
    <i id="closing_button" class="fa fa-close hide" onclick="retract()"></i>
          <div class="logo"><a href="https://www.instagram.com/_hackerspace_msit_/" target="_blank"><img src="./public/instagram.png" alt="" /></a></div>
          <div class="logo"><a href="https://www.facebook.com/profile.php?id=100091680046825" target="_blank"><img src="./public/facebook.png" alt="" /></a></div>
          <div class="logo"><a href="https://github.com/Hackerspace2023" target="_blank"><img src="./public/github.png" alt="" /></a></div>
        </div>
    `;
    }
    else{
        document.getElementById('logo-section').innerHTML =`
        <i id="closing_button" class="fa fa-close hide" style='color: black' onclick="retract()"></i>
          <div class="logo"><a href="https://www.instagram.com/_hackerspace_msit_/" target="_blank"><img src="./public/instagram.png" alt="" /></a></div>
          <div class="logo"><a href="https://www.facebook.com/profile.php?id=100091680046825" target="_blank"><img src="./public/facebook.png" alt="" /></a></div>
          <div class="logo"><a href="https://github.com/Hackerspace2023" target="_blank"><img src="./public/github.png" alt="" /></a></div>
        </div>
    `;
    }
}

function switchtoLightMode(){
    document.getElementById('current_stylesheet').innerHTML=`
    <link rel="stylesheet" href="./light_style.css" />
    `;
    document.getElementById('fetch-info').innerHTML=`0`;
    document.getElementById('switch-mode').innerHTML=`
    <div onclick="switchtoDarkMode()">Dark</div>
    `;
    show();
}
function switchtoDarkMode(){
    document.getElementById('current_stylesheet').innerHTML=`
    <link rel="stylesheet" href="./style.css" />
    `;
    document.getElementById('fetch-info').innerHTML=`1`;
    document.getElementById('switch-mode').innerHTML=`
    <div onclick="switchtoLightMode()">Light</div>
    `;
    show();
}