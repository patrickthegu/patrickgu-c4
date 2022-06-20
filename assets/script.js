console.log("all working");

var startbutton = document.getElementById('start-btn');
var question = document.getElementById('question');
var answer = document.getElementById('answer');

var time = document.getElementById('timer');

var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');

var end = document.getElementById('end-container');
var finalscore = document.getElementById('finalscore');

var count = 60;

var score = 0;

startbutton.addEventListener('click', startgame);
var questionnumber = 0;

function startgame() {
    
    startbutton.classList.add('hide');
    question.classList.remove('hide');
    answer.classList.remove('hide');
    setInterval(function(){
        time.textContent = count;
        count--;}, 1000)

    
    loadquestion(questiontext, questionnumber);   

};
    

    


function loadquestion(questiontext, i) {
    question.innerText = questiontext[i][0];
    answer.children[0].innerText = questiontext[i][1];
    answer.children[1].innerText = questiontext[i][2];
    answer.children[2].innerText = questiontext[i][3];
    answer.children[3].innerText = questiontext[i][4];

    var correctanswer;
    if(questiontext[i][5] === questiontext[i][1]) {
        correctanswer = document.getElementById('option1');
    }
    else if (questiontext[i][5] === questiontext[i][2]) {
        correctanswer = document.getElementById('option2');
    }
    else if (questiontext[i][5] === questiontext[i][3]) {
        correctanswer = document.getElementById('option3');
    }
    else if (questiontext[i][5] === questiontext[i][4]) {
        correctanswer = document.getElementById('option4');
    };

    
    correctanswer.addEventListener('click',correct);
    answer.addEventListener('click', incorrect);

};


function correct() {
    if ((!(questionnumber < questiontext.length))||(count < 0)) {
        console.log('ending1');
    }
    else{
    count=count+15;
    
    console.log("correct");
    loadquestion(questiontext, questionnumber);
    };
};

function incorrect() {
    questionnumber++;
    if ((!(questionnumber < questiontext.length))||(count < 0)) {
        score=count-15;
        console.log(score);
        question.classList.add('hide');
        answer.classList.add('hide');
        time.classList.add('hide');
        end.classList.remove('hide')
        finalscore.innerText = score;
        console.log('ending2');
    }
    else {
    count=count-15;
    console.log("incorrect");
    loadquestion(questiontext, questionnumber);
    };
    
};



var questiontext = [
    [
        "Commonly used data types DO NOT include",
        "1. strings",
        "2. booleans",
        "3. alerts",
        "4. numbers",
        "3. alerts"                                              
    ],
    
    [
        "Arrays in Javascript can be used to store ____.",
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
        "4. all of the above"               
    ],

    [
        "String values must be enclosed within ____ when being assigned to variables.",
        "1. commas",
        "2. curly brackets",
        "3. quotes",
        "4. parentheses",
        "3. quotes"               
    ],

    [
        "The condition in an if / else statement is enclosed within ____.",
        "1. quotes",
        "2. curly brackets",
        "3. parentheses",
        "4. square brackets",
        "3. parentheses"               
    ],

    [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "1. Javascript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
        "4. console.log"               
    ]

];


