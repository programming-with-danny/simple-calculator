

document.getElementById('btn').addEventListener('click',() =>{
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let operation = document.getElementById('operation').value;
    let output = document.getElementById('display');
    if (operation === 'Addition') {
        output.innerHTML = (num1+num2);
    } else if (operation === 'Subtraction') {
        output.innerHTML = (num1-num2);
    }else if (operation === 'Division') {
        output.innerHTML = (num1/num2).toFixed(2);
    }else if (operation === 'Multiplication') {
        output.innerHTML = (num1*num2);
    }else{
        console.log('choose an operation')
    }

})