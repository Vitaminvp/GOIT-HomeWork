"use strict"

    //Вопросы и ответы
var questions = [
    {
        text: "Дважды два",
        answers: ["два", "четыре" , "три"],
        correctAnsw: 1
    },
    {
        text: "Пять у пять",
        answers: ["двадцать пять", "четыре" , "три"],
        correctAnsw: 0
    },
    {
        text: "Семь у восемь",
        answers: ["два", "четыре" , "пятьдесят шесть"],
        correctAnsw: 2
    },
    {
        text: "Шесть у шесть",
        answers: ["два", "четыре" , "тридцать шесть"],
        correctAnsw: 2
    }
];
var testToString = JSON.stringify(questions);
var testToLocal = localStorage.setItem("test",testToString);


var localToString = localStorage.getItem("test");
var testToObj = JSON.parse(localToString);
    

    // Шаблон
    
var html = document.getElementById('template').innerHTML;
var result = _.template(html)({data: testToObj});
document.body.innerHTML = result;

var yourAnsw = new Array;
var score = 0;

var btnAnsw = document.createElement('input');
    btnAnsw.type = "button";
    btnAnsw.value = "Результат";
    btnAnsw.className = "finish";


document.body.appendChild(btnAnsw);

btnAnsw.addEventListener("click", function(){
    var ul = document.getElementById("qusttionList");
    var answ = ul.querySelectorAll('li');
    var text = "";
    for(let i=0; i<answ.length; i++){
        answ[i].classList.remove("wrong");
        var answCount = answ[i].querySelectorAll('input');
        var answers = 0;
        for(let j=0; j<answCount.length; j++){
            if(answCount[j].checked){
                answers++;
                if(answCount[j].value == testToObj[i].correctAnsw){
                   yourAnsw[i] = true;
                   text = text + "<li>Вопрос № "+ (i+1) +" : " +testToObj[i].text+ " - "+testToObj[i].answers[testToObj[i].correctAnsw] +". <span class='right'>Верно!</span></li>\n</br>";
                }else{
                   yourAnsw[i] = false;
                   text = text + "<li>Вопрос № "+ (i+1) +" : " +testToObj[i].text+ ". <span class='wrong'>Ошибка! </span> ("+testToObj[i].answers[testToObj[i].correctAnsw]+")</li>\n</br>";
                }
            }
        }
        if(answers == 0){
           answ[i].classList.add("wrong");
        }
    }
    if(text == "") text = "<li>Нужно ответить!</li>";
    text = "<h1>Результаты теста</h1> <ul>" +  text +"</ul>";
    for(let i=0; i<yourAnsw.length; i++){
        if(isNaN(yourAnsw[i])) yourAnsw[i] = 0;
        score = score + yourAnsw[i];
    }
    var persent = score/testToObj.length;
    if(persent > 0.65){
        text = text + "<h2 class='right'>"+parseInt(persent*100)+"% Вы прошли тест! </h2>";
    }else{
        text = text + "<h2 class='wrong'>"+parseInt(persent*100)+"% Вы не прошли тест! </h2>"; 
    }
    myModal(text);
    clearForm("quiz");
}, false);

function clearForm(name){
    score = 0;
    yourAnsw.length = 0;
    var frm = document.forms[name];
    for(let i=0; i<frm.elements.length; i++){
        if(frm.elements[i].checked)
            frm.elements[i].checked = false;
    }
}

function myModal(txt){
    var divMod = document.createElement("div");
        divMod.className = "modWrap";
    var divCont = document.createElement("div");
        divCont.className = "modCont";
    var spanMod = document.createElement("span");
        spanMod.className = "close";
        spanMod.innerHTML = "&times";
        divCont.innerHTML = txt;
        divCont.appendChild(spanMod);
        divMod.appendChild(divCont);
        document.body.appendChild(divMod);
        spanMod.onclick = function(){divMod.remove()};
        window.onclick = function(event){
            if(event.target == divMod) divMod.remove();
        };
}
