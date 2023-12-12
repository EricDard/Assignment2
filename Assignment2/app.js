
const cookiebox= document.getElementById("cookie");
var cookiecount= document.getElementById("cookiecount");
let clickpower= document.getElementById("buttonGRAH");
let clickpower2= document.getElementById("button1");
let clickpower3= document.getElementById("button2");
let clickpower4= document.getElementById("button3");


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
    cookiecount.innerHTML= ("Cookies: " + x + " Rate: " + rate + "cps");
}



 function clickpowerGO(){
    if(x>100){
        x = x- 100;
        rate++;
        localStorage.setItem('x', x);
        localStorage.setItem('rate', rate);
        localStorage.setItem('clickpowerlevel', clickpowerlevel);
        localStorage.setItem('clickpowercost', clickpowercost);
        localStorage.setItem('clickpowerrate', clickpowerrate);
        

    }
    else{
        setTimeout(clickpowerdecline, 1000);
    clickpower.textContent="NOT ENOUGH PUNK!";
    clickpower.body.style.background = black;
        
        }
    }

        function clickpowerGO2(){
            if(x>1000){
                x = x- 1000;
                rate= rate + 100;
                localStorage.setItem('x', x);
                localStorage.setItem('rate', rate);
                localStorage.setItem('clickpowerlevel', clickpowerlevel);
                localStorage.setItem('clickpowercost', clickpowercost);
                localStorage.setItem('clickpowerrate', clickpowerrate);
                }
                else{
                    setTimeout(clickpowerdecline2, 1000);
                    clickpower2.textContent="NOT ENOUGH PUNK!";
                    
                        
                        }
                

}



function clickpowerGO3(){
    if(x>1000000){
        x = x- 1000000;
        rate= rate + 1000;
        localStorage.setItem('x', x);
        localStorage.setItem('rate', rate);
        localStorage.setItem('clickpowerlevel', clickpowerlevel);
        localStorage.setItem('clickpowercost', clickpowercost);
        localStorage.setItem('clickpowerrate', clickpowerrate);
        }
        else{
            setTimeout(clickpowerdecline3, 1000);
            clickpower3.textContent="NOT ENOUGH PUNK!";
            
                
                }
        

}


 function clickpowerdecline(){
    clickpower.textContent="Click Power level 1!: 100C";

 }

 function clickpowerdecline2(){
    clickpower2.textContent="Click Power level 2!: 1000C ";

 }

 function clickpowerdecline3(){
    clickpower3.textContent="Click Power level 3!: 1000000C";
 }

 function endgamedeclined(){
    clickpower4.textContent="End Game: 10000000C";
 }



 function endgame(){
    if (x> 10000000){
        localStorage.clear();
        x=1;
        rate=1;
        cookiedisplay();


    }
    else{
        setTimeout(endgamedeclined, 1000);
        clickpower4.textContent= "NOT ENOUGH PUNK HAHAHAHAHAH YOU REALLY THOUGHT YOU COULD ESCAPE THAT EASILY?";
        
    }
    
 }


 setInterval(cookieadder, 1000);


 








 cookiebox.addEventListener("click", cookieadder);
 clickpower.addEventListener("click", clickpowerGO);
 clickpower2.addEventListener("click", clickpowerGO2);
 clickpower3.addEventListener("click", clickpowerGO3);
 clickpower4.addEventListener("click", endgame);

 
