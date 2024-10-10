let firstVerb = ["はなす", "いう", "まつ", "しぬ", "とぶ", "いそぐ", "およぐ", "のむ", "まねく", "さそう", "もつ", "えがく", "あゆむ", "だす", "たつ", "はしる", "むすぶ", "うたう", "うつ", "こぐ", "きく"];
let secondVerb = ["たべる", "なげる", "にげる", "おきる", "おしえる", "かける", "たりる", "わすれる", "あらわれる", "のべる", "ねる", "いれる", "わける"];
let thirdVerb = ["くる","べんきょうする", "さんかする", "グーグルする", "しゅっせきする", "せつりつする", "かんしゃする", "けっせきする", "にゅうがくする", "そくしんする", "うんどうする", "うんてんする", "けんきゅうする", "そつぎょうする"];

let verbContainer = document.querySelector('.word-container');
let answer = document.querySelector('.answer-container');
let selectors = document.querySelectorAll('.word-selector__option');
let nextButton = document.querySelector('.next-word');
let helpButton = document.querySelector('.help-button');
let helper = document.querySelector('.helper');
// let masu = document.querySelector('.masu');
// let ta = document.querySelector('.ta');
// let nai = document.querySelector('.nai');
// let nakatta = document.querySelector('.nakatta');
let rnd;
let conj;
let currVerb;
let changingMora;
let changedMora;
let rightAnswer;
console.log(selectors)

function selector() {
    selectors.forEach((item) => {
        item.addEventListener('click', (e) => {
            selectors.forEach((j) => {
                j.classList.remove('active');
            })
            e.target.classList.toggle('active');
        })
    });
}
selector();

function nextVerb() {
    conj = Math.floor(Math.random() * 3);

    if (conj == 0) {
        rnd = Math.floor(Math.random() * firstVerb.length);
        currVerb = firstVerb[rnd];
    } else if (conj == 1) {
        rnd = Math.floor(Math.random() * secondVerb.length);
        currVerb = secondVerb[rnd];
    } else if (conj == 2) {
        rnd = Math.floor(Math.random() * secondVerb.length);
        currVerb = thirdVerb[rnd];
    }

    verbContainer.innerHTML = currVerb;
    answer.classList.remove('right');
    answer.value = "";
}
nextVerb();

function checkAnswer() {
    if (selectors[1].classList.contains('active') || selectors[3].classList.contains('active')) {
        if (conj == 0) {
            changingMora = currVerb.slice(-1);
            if (changingMora == 'ぶ') changedMora = 'ば';
            if (changingMora == 'う') changedMora = 'わ';
            if (changingMora == 'く') changedMora = 'か';
            if (changingMora == 'す') changedMora = 'さ';
            if (changingMora == 'つ') changedMora = 'た';
            if (changingMora == 'ぬ') changedMora = 'な';
            if (changingMora == 'ぐ') changedMora = 'が';
            if (changingMora == 'む') changedMora = 'ま';
            if (changingMora == 'る') changedMora = 'る';

            if (selectors[1].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -1) + changedMora}ない`;
            if (selectors[3].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -1) + changedMora}なかった`;

        } else if (conj == 1) {
            if (selectors[1].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -1)}ない`;
            if (selectors[3].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -1)}なかった`;

        } else if (conj == 2 && currVerb !=='くる') {
            if (selectors[1].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -2)}しない`;
            if (selectors[3].classList.contains('active')) rightAnswer = `${currVerb.slice(0, -2)}しなかった`;
        }
        else if (currVerb =='くる')　{
            if (selectors[1].classList.contains('active')) rightAnswer = `こない`;
            if (selectors[3].classList.contains('active')) rightAnswer = `こなかった`;
        } 
    }

    if (selectors[0].classList.contains('active')) {
        if (conj == 0) {
            changingMora = currVerb.slice(-1);
            if (changingMora == 'ぶ') changedMora = 'び';
            if (changingMora == 'う') changedMora = 'い';
            if (changingMora == 'く') changedMora = 'き';
            if (changingMora == 'す') changedMora = 'し';
            if (changingMora == 'つ') changedMora = 'ち';
            if (changingMora == 'ぬ') changedMora = 'に';
            if (changingMora == 'ぐ') changedMora = 'ぎ';
            if (changingMora == 'む') changedMora = 'み';
            if (changingMora == 'る') changedMora = 'り';

            rightAnswer = `${currVerb.slice(0, -1) + changedMora}ます`;

        } else if (conj == 1) {
            rightAnswer = `${currVerb.slice(0, -1)}ます`;

        } else if (conj == 2 && currVerb !=='くる') {
            rightAnswer = `${currVerb.slice(0, -2)}します`;
        }
        else if (currVerb =='くる')　{
            rightAnswer = `きます`;
        } 
    }

    if (selectors[2].classList.contains('active')) {
        if (conj == 0) {
            changingMora = currVerb.slice(-1);
            if (changingMora == 'ぶ') changedMora = 'んだ';
            if (changingMora == 'う') changedMora = 'った';
            if (changingMora == 'く') changedMora = 'いた';
            if (changingMora == 'す') changedMora = 'した';
            if (changingMora == 'つ') changedMora = 'った';
            if (changingMora == 'ぬ') changedMora = 'んだ';
            if (changingMora == 'ぐ') changedMora = 'いだ';
            if (changingMora == 'む') changedMora = 'んだ';
            if (changingMora == 'る') changedMora = 'った';

            rightAnswer = `${currVerb.slice(0, -1) + changedMora}`;

        } else if (conj == 1) {
            rightAnswer = `${currVerb.slice(0, -1)}た`;

        } else if (conj == 2 && currVerb !=='くる') {
            rightAnswer = `${currVerb.slice(0, -2)}した`;
        }
        else if (currVerb =='くる')　{
            rightAnswer = `きた`;
        } 
    }

    if (answer.value == rightAnswer) {
        answer.classList.add('right');
        answer.classList.remove('wrong');
    } else {
        answer.classList.remove('right');
    }


}


answer.addEventListener('input', (e) => {
    checkAnswer();
    console.log('1');

});

nextButton.addEventListener('click', (e)=>{
    nextVerb();
    answer.innerHTML = '';
} );

helpButton.addEventListener('click', (e)=>{
    helper.classList.toggle('hidden')
    if (helper.classList.contains('hidden')){
        helpButton.innerHTML = '?';
    } else {
        helpButton.innerHTML = 'X';
    }
    
})