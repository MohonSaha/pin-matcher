function getPin (){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        // console.log('got three digit and calling again');
        return getPin();
    }
}

function generatepin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if(number == 'C')
        calcInput.value = '';
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('type-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if(pin == typeNumbers){
        failNotification.style.display = 'none';
        successNotification.style.display = 'block';
    }
    else{
        successNotification.style.display = 'none';
        failNotification.style.display = 'block';
    }
}