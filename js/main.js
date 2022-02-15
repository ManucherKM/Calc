//Звуки
let audioSlick = new Audio("audio/one.mp3");

//Дотягиваемся до блоков (виды ипотеки)

let blockOne = document.querySelector(".block-parentOne");
let blockTwo = document.querySelector(".block-parentTwo");
let blockThree = document.querySelector(".block-parentThree");
let blockFour = document.querySelector(".block-parentFour");
let blockFive = document.querySelector(".block-parentFive");

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
        blockOne.classList.remove("opac");


        document.querySelector(".header-text").style.animationDuration = "0.9s";
        document.querySelector(".header-text").style.animationName = "slideinOne-two";

        document.querySelector(".container").style.animationDuration = "1.1s";
        document.querySelector(".container").style.animationName = "slideinOne-two";


        document.querySelector(".block").classList.remove("opac");
        blockOne.style.animationDuration = "1.3s";
        blockOne.style.animationName = "slideinOne-two";

        document.body.onscroll = function () {
            let scrollTop = window.scrollY;
            if (scrollTop >= 100) {
                blockTwo.classList.remove("opacv")
                blockTwo.style.animationDuration = "1s";
                blockTwo.style.animationName = "slideinOne-two";
            }

            if (scrollTop >= 300) {
                blockThree.classList.remove("opacv")
                blockThree.style.animationDuration = "1s";
                blockThree.style.animationName = "slideinOne-two";
            }

            if (scrollTop >= 600) {
                blockFour.classList.remove("opacv")
                blockFour.style.animationDuration = "1s";
                blockFour.style.animationName = "slideinOne-two";
            }

            if (scrollTop >= 900) {
                blockFive.classList.remove("opacv")
                blockFive.style.animationDuration = "1s";
                blockFive.style.animationName = "slideinOne-two";
            }

        };
        setTimeout(() => {
            audioSlick.play();
        }, 200);
    }, 500);


    //Получаем кнопки от доп. блоков
    let buttonOne = document.querySelector(".block-parent__btn-One");
    let buttonTwo = document.querySelector(".block-parent__btn-Two");
    let buttonThree = document.querySelector(".block-parent__btn-Three");
    let buttonFour = document.querySelector(".block-parent__btn-Four");
    let buttonFive = document.querySelector(".block-parent__btn-Five");

    //Ставим на них обработчики событий
    const anchors = document.querySelectorAll('a[href^="#top"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }

    buttonOne.addEventListener("click", function () {
        inputDopFour.value = 4.89;
    })

    buttonTwo.addEventListener("click", function () {
        inputDopFour.value = 4.39;
    })

    buttonThree.addEventListener("click", function () {
        inputDopFour.value = 6;
    })

    buttonFour.addEventListener("click", function () {
        inputDopFour.value = 6.5;
    })

    buttonFive.addEventListener("click", function () {
        inputDopFour.value = 5;
    })
};





