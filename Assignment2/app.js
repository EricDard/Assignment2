
const cookiebox= document.getElementById("cookie");
var cookiecount= document.getElementById("cookiecount");
let clickpower= document.getElementById("buttonGRAH");


var x = localStorage.getItem('x') ? parseInt(localStorage.getItem('x')) : 0;
var rate = localStorage.getItem('rate') ? parseInt(localStorage.getItem('rate')) : 1;
var clickpowerlevel = localStorage.getItem('clickpowerlevel') ? parseInt(localStorage.getItem('clickpowerlevel')) : 2;
var clickpowercost = localStorage.getItem('clickpowercost') ? parseInt(localStorage.getItem('clickpowercost')) : 100;
var clickpowerrate = localStorage.getItem('clickpowerrate') ? parseInt(localStorage.getItem('clickpowerrate')) : 1;








 function cookieadder(){
    x= x+ rate;
    console.log(x);
    cookiedisplay()
    
}


function cookiedisplay(){
    cookiecount.innerHTML= ("COOKIES: " + x);
}



 function clickpowerGO(){
    if (x < clickpowercost) {
        clickpower.textContent = "not enough PUNK!!"

    }
    else{
        x = x- clickpowercost;
        rate = rate + clickpowerrate;
        clickpowerrate++;
        clickpowercost= math.floor(clickpowercost+ (clickpowercost * 0.33));
        clickpowerlevel ++;
        cookiedisplay()
        updatebutton()
        localStorage.setItem('x', x);
        localStorage.setItem('rate', rate);
        localStorage.setItem('clickpowerlevel', clickpowerlevel);
        localStorage.setItem('clickpowercost', clickpowercost);
        localStorage.setItem('clickpowerrate', clickpowerrate);
        }

 }



 








 cookiebox.addEventListener("click", cookieadder);
 clickpower.addEventListener("click", clickpowerGO);


