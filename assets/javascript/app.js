// set up questions, with answer options, and correct answer
var questions = [
    {question: "Who is Bob?",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3"},

    {question:"c",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"d",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"e",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },

    {question:"b",
    answer1:"b",
    answer2:"b",
    answer3:"b",
    answer4:"b",
    correct:"answer3" },
];

var timer = 20;
var timerBetween = 4;
var intervalId;



function fail() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    timerBetween--;
    $("#timeDisplay").html("<h3>" + timer + "<h3>");
    if (number === 0) {
        pushQuestion();
    };
}

function nextQuestion() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    timer--;
    $("#timeDisplay").html("<h3>" + timer + "<h3>");
    if (number === 0) {
        fail();
    };
    pushQuestions();
}

function pushQuestion() {
    for (i=0; i<=questions.length; i++) {
        var txt1 = 'questions[i].question';
        var txt2 = '<button type="button" class="btn btn-secondary btn-md btn-block">questions[i].answer1</button>';
        var txt3 = '<button type="button" class="btn btn-secondary btn-md btn-block">questions[i].answer2</button>';
        var txt4 = '<button type="button" class="btn btn-secondary btn-md btn-block">questions[i].answer3</button>';
        var txt5 = '<button type="button" class="btn btn-secondary btn-md btn-block">questions[i].answer4</button>';
    };
    $("#content").after(txt1, txt2, txt3, txt4, txt5);
}

$("#gameStart").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    timer--;
    $("#timeDisplay").html("<h3>" + timer + "<h3>");
    if (number === 0) {
        fail();
    };
    pushQuestions();
});