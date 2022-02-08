//Звуки
let audioSlick = new Audio("audio/one.mp3");


// Все дополнительные инпуты(индикаторы значения)
const inputDopOne = document.querySelector(".input-dop_one");
const inputDopTwo = document.querySelector(".input-dop_two");
const inputDopThree = document.querySelector(".input-dop_three");
const inputDopFour = document.querySelector(".input-dop_four");

//Ползунки
const inputOne = document.querySelector(".one");
const inputTwo = document.querySelector(".two");
const inputThree = document.querySelector(".three");
const inputFour = document.querySelector(".four");

//Вешаем обработчики на все ползунки
inputOne.oninput = function () {
    inputDopOne.value = inputOne.value;
    sumCr()
};

inputTwo.oninput = function () {
    inputDopTwo.value = inputTwo.value;
    sumCr();
};

inputThree.oninput = function () {
    inputDopThree.value = inputThree.value;
    sumCr();
};

inputFour.oninput = function () {
    inputDopFour.value = inputFour.value;
    sumCr();
};

//Вешаем обработчики на все дополнительные инпуты
inputDopOne.oninput = function () {
    inputOne.value = inputDopOne.value;
    sumCr();
};

inputDopTwo.oninput = function () {
    inputTwo.value = inputDopTwo.value;
    sumCr();
};

inputDopThree.oninput = function () {
    inputThree.value = inputDopThree.value;
    sumCr();
};

inputDopFour.oninput = function () {
    inputFour.value = inputDopFour.value;
    sumCr();
};

//Получаем разметку информационной части
const monthMoney = document.querySelector(".month-money");
const sumMoney = document.querySelector(".sum-money");
const recomendMonth = document.querySelector(".recomend-money");
const percentNumber = document.querySelector(".percent-number");

//Сумма кредита
function sumCr() {
    let i = 0;
    i = inputDopOne.value - inputDopTwo.value;

    if (i < 0) {
        i = 0;
    }
    let j = i * (inputDopFour.value / 100);
    let sum = Math.floor(i + (inputDopThree.value * j));

    if (sum >= 0) {
        sumMoney.textContent = sum + " Р";
    };

    if (inputDopOne.value < 0 || inputDopTwo.value < 0 || inputDopThree.value < 0 || inputDopFour.value < 0) {

        sumMoney.textContent = 50500 + "Р";

        inputDopOne.value = 100000;
        inputDopTwo.value = 50000;
        inputDopThree.value = 1;
        inputDopFour.value = 1;

        inputOne.value = 100000;
        inputTwo.value = 50000;
        inputThree.value = 1;
        inputFour.value = 1;
    };
    
    percentNumber.textContent = inputDopFour.value + " %";

    moneyMon(sum);
}

//Ежемесячный платеж
function moneyMon(money) {
    let q = inputDopThree.value * 12;
    let b = Math.floor(money / q);
    monthMoney.textContent = b;
    recom(b);
}

//Рекомендованный доход
function recom(params) {
    let m = params * 2;
    recomendMonth.textContent = m;
}

//При клике на 1 кнопку
document.querySelector(".containerone__btn-calc").onclick = function () {
    

    document.querySelector(".lead-text").style.animationDuration = "0.5s";
    document.querySelector(".lead-text").style.animationName = "slideinOneEnd";

    document.querySelector(".containerone__text").style.animationDuration = "0.5s";
    document.querySelector(".containerone__text").style.animationName = "slideinTwoEnd";

    document.querySelector(".containerone__btn-calc").style.animationDuration = "0.5s";
    document.querySelector(".containerone__btn-calc").style.animationName = "slideinThreeEnd";
    audioSlick.play();
    setTimeout(() => {
        document.querySelector(".containerone").classList.add("opac");
        document.querySelector(".block").classList.remove("opac");
        
        document.querySelector(".header-text").style.animationDuration = "1s";
        document.querySelector(".header-text").style.animationName = "slideinOne-two";

        document.querySelector(".container").style.animationDuration = "1s";
        document.querySelector(".container").style.animationName = "slideinOne-two";
        setTimeout(() => {
            audioSlick.play();
        }, 200);
    }, 500);

}