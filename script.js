var op1 = '0';
var op2 = null;
var op = null;
var num = '';
var screendp = document.getElementById('dpscreen');
const calculator = (digit) => {
    var Acode = digit.charCodeAt(0);
    if((Acode > 47 && Acode < 58)){
        num = num + digit;
        console.log(1);
        screendp.innerHTML = "0";
        return;
    }
    else if(Acode === 32){
        //If reset button is pressed.
        console.log(2);
        screendp.innerHTML = '0';
    }
    else if(Acode < 48){
        op1 = num;
        num = '';
        op = digit;
        screendp.innerHTML = "0";
        console.log(3);
    }
    else if(Acode === 33){
        num = '-' + num;
        screendp.innerHTML = "0";
        console.log(4);
    }
    else{
        op2 = num;
        num = '';
        op1 = eval(op1 + ' ' + op + ' ' + op2);
        screendp.innerHTML = "0";
        console.log(5);
    }
};

var buttons = document.getElementsByClassName('key-btn');

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        let digit = this.getAttribute('value');
        var Acode = digit.charCodeAt(0);
        if((Acode > 47 && Acode < 58)){
            num = num + digit;
            //console.log(1);
            screendp.innerHTML = num;
            return;
        }
        else if(Acode === 32){
            //If reset button is pressed.
            //console.log(2);
            op1 ='0';
            screendp.innerHTML = op1;
            num='';
        }
        else if(Acode === 33){
            num = '-' + num;
            screendp.innerHTML = num;
            //console.log(4);
        }
        else if(Acode < 48){
            //If operator is clicked
            (num !== '')? op1 = num :op1 = op1;
            num = '';
            op = digit;
            screendp.innerHTML = op;
            //console.log(3);
        }
        else{
            if(num === ''){
                screendp.innerHTML = 'Error';
                return;
            }
            op2 = num;
            num = '';
            op1 = eval(op1 + ' ' + op + ' ' + op2);
            if(op1 === Infinity){
                screendp.innerHTML = 'Error';
                op1 = '0';
                return;
            }
            screendp.innerHTML = op1;
            //console.log(5);
        }
    });
}

/*document.getElementById('reset').addEventListener('click', calculator(' '));

document.getElementById('modulo').addEventListener('click', calculator('%'));

document.getElementById('divide').addEventListener('click', calculator('/'));

document.getElementById('7').addEventListener('click', calculator('7'));

document.getElementById('8').addEventListener('click', calculator('8'));

document.getElementById('9').addEventListener('click', calculator('9'));

document.getElementById('product').addEventListener('click', calculator('*'));

document.getElementById('4').addEventListener('click', calculator('4'));

document.getElementById("5").addEventListener('click', calculator('5'));

document.getElementById("6").addEventListener('click', calculator('6'));

document.getElementById("subtract").addEventListener('click', calculator('-'));

document.getElementById("1").addEventListener('click', calculator('1'));

document.getElementById("2").addEventListener('click', calculator('2'));

document.getElementById("3").addEventListener('click', calculator('3'));

document.getElementById("add").addEventListener('click', calculator('+'));

document.getElementById("sign").addEventListener('click', calculator('!'));

document.getElementById("0").addEventListener('click', calculator('0'));

document.getElementById("point").addEventListener('click', calculator('.'));

document.getElementById("evaluate").addEventListener('click', calculator('='));
*/

