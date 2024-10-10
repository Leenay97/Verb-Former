let firstVerb = ["あたたかい", "あつい", "いたい", "しろい", "ふるい", "ほそい", "おきい", "ながい", "おいしい", "ふとい", "ひろい", "やさしい", "にがい", "あかい", "とおい", "すくない", "あおい", "ちかい", "すずしい", "ちいさい", "はずかしい"];
let secondVerb = ["きれい", "きらい", "ゆうめい", "べんり", "げんき", "ふべん", "しずか", "ひま", "かんたん", "あんぜん", "ていねい", "かんぺき", "すき", "じょうず", "へた", "びょうき", "おだやか", "にぎやか"];

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
let rightAnswer1;
let rightAnswer2;
let rightAnswer3;
let rightAnswer4;
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
    conj = Math.floor(Math.random() * 2);

    if (conj == 0) {
        rnd = Math.floor(Math.random() * firstVerb.length);
        currVerb = firstVerb[rnd];
    } else if (conj == 1) {
        rnd = Math.floor(Math.random() * secondVerb.length);
        currVerb = secondVerb[rnd];
    }

    verbContainer.innerHTML = currVerb;
    answer.classList.remove('right');
    answer.value = "";
}
nextVerb();

function checkAnswer() {
    if (conj == 0) {

        if (selectors[0].classList.contains('active'))　{
            rightAnswer1 = `${currVerb.slice(0, -1)}くない`;
        } 
        if (selectors[1].classList.contains('active'))　{
            rightAnswer1 = `${currVerb.slice(0, -1)}かった`;
        } 
        if (selectors[2].classList.contains('active'))　{
            rightAnswer1 = `${currVerb.slice(0, -1)}くなかった`;
        } 


    } else if (conj == 1) {
        if (selectors[0].classList.contains('active'))　{
            rightAnswer1 = `${currVerb}じゃない`;
            rightAnswer2 = `${currVerb}ではありません`;
            rightAnswer3 = `${currVerb}ではない`;
            rightAnswer4 = `${currVerb}じゃありません`;
        } 
        if (selectors[1].classList.contains('active'))　{
            rightAnswer1 = `${currVerb}でした`;
            rightAnswer2 = `${currVerb}だった`;
        } 
        if (selectors[2].classList.contains('active'))　{
            rightAnswer1 = `${currVerb}じゃなかった`;
            rightAnswer2 = `${currVerb}ではありませんでした`;
            rightAnswer3 = `${currVerb}ではなかった`;
            rightAnswer4 = `${currVerb}じゃありませんでした`;
        } 
    }

    
    if (answer.value == rightAnswer1 || answer.value == rightAnswer2 || answer.value == rightAnswer3 || answer.value == rightAnswer4) {
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

nextButton.addEventListener('click', (e) => {
    nextVerb();
    answer.innerHTML = '';
});

helpButton.addEventListener('click', (e) => {
    helper.classList.toggle('hidden')
    if (helper.classList.contains('hidden')) {
        helpButton.innerHTML = '?';
    } else {
        helpButton.innerHTML = 'X';
    }

})