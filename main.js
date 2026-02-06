var money = 5; 
var pot = 0; 
var mDisplay = document.getElementById('money'); 
var d1 = document.getElementById('d1'); 
var d2 = document.getElementById('d2'); 
var d3 = document.getElementById('d3'); 
var d4 = document.getElementById('d4'); 
var d5 = document.getElementById('d5'); 
var p1 = document.getElementById('p1'); 
var p2 = document.getElementById('p2'); 
var p3 = document.getElementById('p3'); 
var p4 = document.getElementById('p4'); 
var p5 = document.getElementById('p5'); 
var div3 = document.getElementById('div3'); 
var div4 = document.getElementById('div4'); 
var div5 = document.getElementById('div5'); 
var piv3 = document.getElementById('piv3'); 
var piv4 = document.getElementById('piv4'); 
var piv5 = document.getElementById('piv5'); 
var d1p = 0; 
var d2p = 0; 
var d3p = 0; 
var d4p = 0; 
var d5p = 0; 
var p1p = 0; 
var p2p = 0; 
var p3p = 0; 
var p4p = 0; 
var p5p = 0; 
var game = false; 
var hi = 1; 
var hibo = 1; 
d1.innerHTML = '-';
d2.innerHTML = '-'; 
p1.innerHTML = '-'; 
p2.innerHTML = '-'; 
div3.style.display = 'none'; 
div4.style.display = 'none'; 
div5.style.display = 'none'; 
piv3.style.display = 'none'; 
piv4.style.display = 'none'; 
piv5.style.display = 'none'; 
if (localStorage.getItem('money') == null) { 
    localStorage.setItem('money', 5); console.log('Gave 5'); 
} else {     
    money = localStorage.getItem('money');     
    mDisplay.innerHTML = '$' + money; 
}; 
if (localStorage.getItem('rounds') == null) { 
    localStorage.setItem('rounds', 0); 
    console.log('Gave 0 rounds'); 
} else {     
    rounds = localStorage.getItem('rounds'); 
}; 
function b1() {     
    if (game == false) {         
        if (money > 0) {         
            money -= 1;     
            pot += 1;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function b5() {     
    if (game == false) {         
        if (money >= 5) {         
            money -= 5;     
            pot += 5;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function b10() {     
    if (game == false) {         
        if (money >= 10) {         
            money -= 10;     
            pot += 10;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function b50() {     
    if (game == false) {         
        if (money >= 50) {         
            money -= 50;     
            pot += 50;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function b100() {     
    if (game == false) {         
        if (money >= 100) {         
            money -= 100;     
            pot += 100;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
} 
function b500() {     
    if (game == false) {         
        if (money >= 500) {         
            money -= 500;     
            pot += 500;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function b1000() {     
    if (game == false) {         
        if (money >= 1000) {         
            money -= 1000;     
            pot += 1000;     
            console.log(money);     
            console.log(pot);     
            mDisplay.innerHTML = '$' + money; 
        } else{error('No money')};     
    } else{error('Game already started')}; 
}; 
function allin() {     
    if (game == false) {         
        console.log('all');     
        pot += money;     
        money = 0;     
        console.log(money);     
        console.log(pot);     
        mDisplay.innerHTML = '$' + money;     
    } else{error('Game already started')}; 
}; 
function start() {     
    if (money >= 9000) {         
        alert('Hey there this is the IRS you need to pay taxes!');         
        alert('Because you have over 8999 dollars you owe us 20%');         
        moneyminus = money*0.2;         
        console.log('bobo', moneyminus);         
        console.log('bobo', money);         
        money = money - moneyminus;         
        mDisplay.innerHTML = '$' + money;         
        save();         
        alert('Thanks for the money!');     
    };     
    if (pot > 100000) {         
        alert('Where did you get all the money from?');         
        alert('You need to read the rules. \n Rule 67A: If you put in over 999999 we take 20%, no fights.');         
        pot = pot*0.2;         
        console.warn(pot);         
        alert('Have a nice day');     
    };     
    if (pot <= 0) {         
        error('No money in pot!');     
    }     
    else {         
        document.getElementById('startB').style.display = 'none';         
        randomcards();         
        game = true;              
    }; 
}; 
function error(message) {     
    console.error('Error: ', message);     
    alert('Error: '+ message); 
}; 
function randomcards() {     
    d1p = Math.floor(Math.random() * 10) + 2;     
    d2p = Math.floor(Math.random() * 10) + 2;     
    p1p = Math.floor(Math.random() * 10) + 2;     
    p2p = Math.floor(Math.random() * 10) + 2;     
    d1.innerHTML = d1p;     
    p1.innerHTML = p1p;     
    p2.innerHTML = p2p;     
    if (d1p == 11) {         
        d1.innerHTML = '*';     
    };     
    if (p1p == 11) {         
        p1.innerHTML = '*';     
    };     
    if (p2p == 11) {         
        p2.innerHTML = '*';     
    };     
    dtotal = d1p;     
    document.getElementById('dtotal').innerHTML = 'Dealer: ' + dtotal;     
    sleep(400);     
    check(); 
}; 
function storage() { 
    var divstyle = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;'; 
}; 
function save() {     
    localStorage.setItem('money', money); }; 
    function hit() {     
        if (game == false) {         
            error('Game has not started');     
        } else{     
            if (p1p+p2p+p3p+p4p+p5p <= 21) {     
                if (hi == 1) {     
                    p3p = Math.floor(Math.random() * 10) + 2;     
                    p3.innerHTML = d1p;     
                    piv3.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
                    hi = 2;     
                    check();     
                } else{ if (hi == 2) {     
                    p4p = Math.floor(Math.random() * 10) + 2;     
                    p4.innerHTML = d1p;     
                    piv4.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
                    hi = 3;     
                    check();     
                } else {if (hi == 3) {     
                    p5p = Math.floor(Math.random() * 10) + 2;     
                    p5.innerHTML = d1p;     
                    piv5.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
                    hi = 9000;     
                    check();     
                } else {         
                    error('No card spaces left');     
                };     
            };     
        };     
    } else {         
        check();     
    }; 
};    
if (d1p == 11) {         
    d1.innerHTML = '*';     
};     
if (p3p == 11) {         
    p3.innerHTML = '*';     
};     
if (p4p == 11) {         
    p4.innerHTML = '*';     
};     
if (p5p == 11) {         
    p5.innerHTML = '*';     
}; 
}; 
function lose(reason) {     
    localStorage.setItem('money', money);     
    alert('YOU LOST: '+ reason);     
    location.reload(); 
}; 
function check() {     
    p1.innerHTML = p1p;     
    p2.innerHTML = p2p;     
    p3.innerHTML = p3p;     
    p4.innerHTML = p4p;     
    p5.innerHTML = p5p;     
    if (d1p == 11) {         
        d1.innerHTML = '*';     
    };     
    if (p3p == 11) {         
        p3.innerHTML = '*';     
    };     
    if (p4p == 11) {         
        p4.innerHTML = '*';     
    };     
    if (p5p == 11) {         
        p5.innerHTML = '*';     
    };     
    if (p1p+p2p+p3p+p4p+p5p <= 21) {
        console.log('Under')
    } else{         
        if (p1.innerHTML == '*' || p2.innerHTML == '*' || p3.innerHTML == '*' || p4.innerHTML == '*' || p5.innerHTML == '*') {             
            if (p1.innerHTML == '*') {                 
                p1p = 1;             
            };             
            if (p2.innerHTML == '*') {                 
                p2p = 1;             
            };             
            if (p3.innerHTML == '*') {                 
                p3p = 1;             
            };             
            if (p4.innerHTML == '*') {                 
                p4p = 1;             
            };             
            if (p5.innerHTML == '*') {                 
                p5p = 1;             
            };         
        } else{setTimeout(function(){lose('Bust')}, 300)};     
    };     
    total = p1p+p2p+p3p+p4p+p5p;     
    document.getElementById('ptotal').innerHTML = 'You: ' + total; 
}; 
function stand() {     
    if (game == false) {         
        error('Game has not started');     
    } else {     
        ptotal = p1p+p2p+p3p+p4p+p5p;     
        dtotal = d1p+d2p+d3p+d4p+d5p;     
        dtotal = d1p+d2p+d3p+d4p+d5p;     
        d2.innerHTML = d2p;     
        document.getElementById('dtotal').innerHTML = 'Dealer: ' + dtotal;     
        d1.innerHTML = d1p;     
        d2.innerHTML = d2p;     
        d3.innerHTML = d3p;     
        d4.innerHTML = d4p;     
        d5.innerHTML = d5p; };     
        sleep(500);         
        if (d1p+d2p+d3p+d4p+d5p > 21) {             
            win('You won! +' + pot*2, 2);         
        };     
        if (dtotal < 17) {         
            setTimeout(dhit, 400);     
        };     
        if (dtotal >= 17) {         
            setTimeout(winlose, 400);     
        }; 
    };  
function dcheck() {      

}; 
    function win(message, multi) {     
        alert(message);     
        money += pot*multi;     
        pot = 0;     
        save();     
        location.reload(); 
    }; 
    function dhit() {     
        console.warn(hibo);     
        if (hibo == 1) {     
            d3p = Math.floor(Math.random() * 10) + 2;     
            d3.innerHTML = d3p;     
            div3.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
            hibo = 2;     
        } else {         
            if (hibo == 2) {     
                d4p = Math.floor(Math.random() * 10) + 2;     
                d4.innerHTML = d4p;     
                div4.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
                hibo = 3;     
            } else {         
                if (hibo == 3) {     
                    d5p = Math.floor(Math.random() * 10) + 2;     
                    d5.innerHTML = d5p;     
                    div5.style = 'display: inline-block; border: 4px; border-color: black; border-style: solid;  margin-right: 50px;';     
                    hibo = 9000;     
                } else {         
                    error('No card spaces left');     
                };     
            };     
        };     
        if (d3p == 11) {         
            d3.innerHTML = '*';     
        } else {if (d4p == 11) {        
            d4.innerHTML = '*';     
        }else {if (d5p == 11) {         
            d5.innerHTML = '*';     
        }; 
    };     
    dtotal = d1p+d2p+d3p+d4p+d5p;     
    document.getElementById('dtotal').innerHTML = 'Dealer: ' + dtotal;     
    if (dtotal > 21) {         
        if (d1.innerHTML == '*' || d2.innerHTML == '*' || d3.innerHTML == '*' || d4.innerHTML == '*' || d5.innerHTML == '*') {             
            if (d1.innerHTML == '*') {                 
                d1p = 1;             };             
                if (d2.innerHTML == '*') {                 
                    d2p = 1;             };             
                    if (d3.innerHTML == '*') {                 
                        d3p = 1;             
                    };             
                    if (d4.innerHTML == '*') {                 
                        d4p = 1;             
                    };             
                    if (d5.innerHTML == '*') {                 
                        d5p = 1;             
                    };         
                };
            };      
            setTimeout(stand, 400); 
        };
     }; 
     function winlose() {     
        ptotal = p1p+p2p+p3p+p4p+p5p;     
        dtotal = d1p+d2p+d3p+d4p+d5p;     
        if (ptotal > dtotal) {         
            if (ptotal == 21) {             
                setTimeout(win('You won +' + pot*2.5, 3), 400);         
            } else{ setTimeout(win('You won +' + pot*2, 2 ), 400); }     
        };     
        if (dtotal > ptotal && dtotal <= 21) {         
            setTimeout(lose('Dealer beat you'), 400);              
        };     
        if (dtotal == ptotal) {         
            money += pot;         
            save();         
            alert('Push');         
            location.reload();     
        }; 
    }; 
    function sleep(milliseconds) {   
        var start = new Date().getTime();   
        for (var i = 0; i < 1e7; i++) {     
            if ((new Date().getTime() - start) > milliseconds){       
                return;     
            };   
        }; 
    };