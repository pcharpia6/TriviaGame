// set up questions, with answer options, and correct answer
var questions = [
    {question: "Question 1: Dwarfs' level of respect for another dwarf is in direct correlation with the length of their what?",
    answers:["Axe Haft", "Beard", "Fingers", "Foot Hair"],
    correct:"1",
    imgUrl:"assets/images/longbeard.jpg"},

    {question: "Question 2: What do Night Goblins hunt in their caves?",
    answers:["Squigs", "Bats", "Minotaur", "Cave Trolls"],
    correct:"0",
    imgUrl:"assets/images/squig.jpg"},

    {question: "Question 3: Which city is known as the City of the Damned?",
    answers:["Brettonia", "Athel Loren", "Miami", "Mordheim"],
    correct:"3",
    imgUrl:"assets/images/mordheim.jpg"},

    {question: "Question 4: What is a dwarf's favored weapon in hand-to-hand combat?",
    answers:["Sword", "Club", "Axe", "Pike"],
    correct:"2",
    imgUrl:"assets/images/axe.jpg"},

    {question: "Question 5: Who is the Lord Hero of the Empire?",
    answers:["Karl Franz", "Balthasar Gelt", "Hans Zintler", "Boris Todbringer"],
    correct:"0",
    imgUrl:"assets/images/karlfranz.jpg"},

    {question: "Question 6: Who is the ultimate enemy of all civilized factions?",
    answers:["Skaven", "Dark Elves", "Greenskins", "Warriors of Chaos"],
    correct:"3",
    imgUrl:"assets/images/archaon.jpg"},

    {question: "Question 7: Which of the following is not a faction in Warhammer Fantasy?",
    answers:["Lizardmen", "Vampire Lords", "Tomb Kings", "Ancient Ones"],
    correct:"3",
    imgUrl:"assets/images/ancientone.jpg"},

    {question: "Question 8: Who leads the tribes of Norsca?",
    answers:["Wulfrik the Wanderer", "Azvab the Unreliant", "Hurl the Burl", "Axe-Hands the Wild"],
    correct:"0",
    imgUrl:"assets/images/wulfrik.jpg"},

    {question: "Question 9: Dinosaurs are found alongside which faction?",
    answers:["Greenskins", "Lizardmen", "Skaven", "Norsca"],
    correct:"1",
    imgUrl:"assets/images/lizardmen.jpg"},

    {question: "Question 10: The narrator of Total War: Warhammer leads each campaign as an agent of Chaos to summon who?",
    answers:["Archaon the Everchosen", "Karl Franz", "Lord of Change", "Diablo"],
    correct:"2",
    imgUrl:"assets/images/lordofchange.jpg"},
];

var questionNum = -1;
var timer = 20;
var timerBetween = 4;
var intervalId;
var question = false;
var between = false;
var correctAns = 0;
var incorrect = 0;
var whyEnd = "";

function reset() {
    questionNum = -1;
    timer = 20;
    timerBetween = 4;
    question = false;
    between = false;
    correctAns = 0;
    incorrect = 0;
    whyEnd = "";
}

// stop timer
function stop() {
    console.log("stop");
    clearInterval(intervalId);
}

// use this function to remove buttons & text divs
function resetText() {
    var timeDisplay = "";
    var txt1 = "";
    var txt2 = "";
    var txt3 = "";
    var txt4 = "";
    var txt5 = "";
    $("#content").html(timeDisplay, txt1, txt2, txt3, txt4, txt5);
}

// set up the decrement for questions and true/false return of player answer
function decrement() {
    if (question === true) {
        timer--;
        $("#timeDisplay").html("<h3>" + timer + "</h3>");
        if (timer === 0) {
            stop();
            timeUp();
        }
    }
    if (between === true) {
        timerBetween--;
        $("#timeDisplay").html("<h3>" + timerBetween + "</h3>");
        if (timerBetween === 0) {
            stop();
            nextQuestion();
        }
    }
}
// return the true/false of player answer, the value of the correct answer, and an applicable picture
function displayPicture() {
    var txt1 = "<h2>" + whyEnd + "</h2>";
    var txt2 = "<h2>The correct answer is: " + questions[questionNum].answers[parseInt(questions[questionNum].correct)] + "!</h2>";
    var txt3 = '<img class="size" src=' + questions[questionNum].imgUrl + '>';
    $("#content").append(txt1, txt2, txt3);
}   

// display correct answer for 4 seconds, then move to next question
function fail() {
    console.log("fail");
    whyEnd = "Incorrect!";
    timerBetween = 4;
    question = false;
    between = true;
    resetText();
    stop();
    displayPicture();
    intervalId = setInterval(decrement, 1000);
}

// response function if player runs out of time
function timeUp() {
    incorrect++;
    console.log("timeUp");
    whyEnd = "Time's up!";
    timerBetween = 4;
    question = false;
    between = true;
    resetText();
    stop();
    displayPicture();
    intervalId = setInterval(decrement, 1000);
}

// response if player gets correct answer
function correctFun() {
    console.log("correct");
    whyEnd = "Correct!";
    timerBetween = 4;
    question = false;
    between = true;
    resetText();
    stop();
    displayPicture();
    intervalId = setInterval(decrement, 1000);
}

// after all 10 questions - provide number of questions correct, number incorrect, and button to restart
function endGame() {
    $("#buttonFlag").append('<button type="button" class="btn btn-primary btn-lg" id="gameStart">Play Again!</button>');
    resetText();
    $("#gameStart").click(function() {
        stop();
        reset();
        resetText();
        nextQuestion();
        $(this).remove();
    });
    txt1 = "<h3>Well done! Your Score:</h3>";
    txt2 = "<h4>Correct: " + correctAns + "</h4>";
    txt3 = "<h4>Incorrect: " + incorrect + "</h4>";
    $("#content").append(txt1, txt2, txt3);
}

function nextQuestion() {
    questionNum ++;
    console.log("nextQuestion");
    if (questionNum <= 9) {
        timer = 20;
        between = false;
        question = true;
        pushQuestion();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);}
    else {
        endGame();}
}

function pushQuestion() {
    resetText();
    console.log("pushQuestion");
    var timeDisplay = '<h2 id="timeDisplay">' + timer + '</h2>'
    var txt1 = '<h4>' + questions[questionNum].question + '</h4>';
    var txt2 = '<button type="button" class="btn btn-secondary btn-md btn-block text-left" id="0">' + questions[questionNum].answers[0] + '</button>';
    var txt3 = '<button type="button" class="btn btn-secondary btn-md btn-block text-left" id="1">' + questions[questionNum].answers[1] + '</button>';
    var txt4 = '<button type="button" class="btn btn-secondary btn-md btn-block text-left" id="2">' + questions[questionNum].answers[2] + '</button>';
    var txt5 = '<button type="button" class="btn btn-secondary btn-md btn-block text-left" id="3">' + questions[questionNum].answers[3] + '</button>';
    
    $("#content").addClass("bg-light");
    $("#content").append(timeDisplay, txt1, txt2, txt3, txt4, txt5);
    $(".btn").click( function() {
        if ($(this).prop("id") === questions[questionNum].correct) {
            console.log(this);
            correctAns++;
            stop();
            correctFun();
        }
        else {
            incorrect++;
            stop();
            fail();
        }
    })
}

$("#gameStart").click(function() {
    nextQuestion();
    $(this).remove();
});