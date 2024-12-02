const main = document.querySelector('.main');

//create input - создали наше поле для ввода
let myPassword = document.createElement('input') //сгенерировали инпут
myPassword.classList.add('pass-input')          //подключили клаас
myPassword.setAttribute('placeholder', 'Generate password') //добавили атрибут


//сделали так, чтобы в инпуте мы не могли вписывать свои данные
myPassword.addEventListener('keypress', (event) =>{
    event.preventDefault()
})

// generate button copy 
let copyBtn = document.createElement('button');
copyBtn.classList.add('button-copy'); //на кнопку добывили сласс из стиля
copyBtn.innerText = 'Copy Password' //добавили текст в кнопку


//добавляем слушателя на кнопку
copyBtn.addEventListener('click', (e) =>{
    myPassword.select();
    navigator.clipboard.writeText(myPassword.value)
})


//generate button password
let generateBtn = document.createElement('button');
generateBtn.classList.add('button-create');
generateBtn.innerText = 'Generate Password'
generateBtn.addEventListener('click', (e) =>{
    let password = generatePassword(rangeChars.value);
    // console.log(password);
    myPassword.value = password;
})

let rangeChars = document.querySelector('#rangeChars')
let numRange = document.querySelector('.numRange');
rangeChars.value = 0;
rangeChars.oninput = () => {
    numRange.innerText = rangeChars.value;
}



//генернируем пароль с помощью функции
function generatePassword(passLength){

        // Генерируем буквы 
    let numChars = '0123456789';                    //номера
    let upChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';     //больште буквы
    let lowChars = 'abcdefghijklmnopqrstuvwxyz';    //мал буквы
    let symbChars = '!@#$%^&*()_+';                  //символы

   
    // let allChars = numChars + upChars + lowChars + symbChars;       //соеденили все
    // console.log(allChars)

   
    let allChars = "";
    if (document.querySelector('#numChars').checked) {
        allChars = allChars.concat(numChars);
    }
    if (document.querySelector('#upChars').checked) {
        allChars = allChars.concat(upChars);
    }
    if (document.querySelector('#lowChars').checked) {
        allChars = allChars.concat(lowChars);
    }
    if (document.querySelector('#symbChars').checked) {
        allChars = allChars.concat(symbChars);
    }
      




    //получаем длину пароля
    let randStr = '';               //рандомная строка - пустая
    for (let i=0; i < passLength; i++){
        let randomNumber = Math.floor(Math.random()*allChars.length)  //выбираем рандомное значение и необходима длина
        randStr += allChars[randomNumber];
        // console.log(randomNumber)
    }
    return randStr;
}






function resetFieldStyles() {
    myPassword.classList.remove('success', 'error');
    // const small = myPassword.parentElement.querySelector('small');
    // small.innerText = 'Error Message';
}

function resetCheckboxes() {
    console.log('Resetting checkboxes');
    document.querySelector('#numChars').checked = false;
    document.querySelector('#upChars').checked = false;
    document.querySelector('#lowChars').checked = false;
    document.querySelector('#symbChars').checked = false;
}

let resetBtn = document.createElement('button');
resetBtn.classList.add('button-reset');
resetBtn.innerText = 'Reset';
resetBtn.addEventListener('click', (e) => {
    myPassword.value = ''; // Сбросить значение поля
    resetFieldStyles(); // Вызов функции для сброса стилей
    resetCheckboxes(); // Сброс значений чекбоксов
    rangeChars.value = 0; // Сбросить значение ползунка
    numRange.innerText = 0; // Сбросить текст счетчика ползунка
});



main.appendChild(myPassword); //сгенерировали наш main
main.appendChild(generateBtn);
main.appendChild(copyBtn);
main.appendChild(resetBtn); // кнопка сброса в main


