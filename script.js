$(document).ready(function () {

    var questions = [{
            q: "This is question 1.",
            a: "aaaa",
            b: "bbb",
            c: "ccc",
            ans: "aaa"
        },
        {
            q: "This is question 2.",
            a: "aaaa",
            b: "bbb",
            c: "ccc",
            ans: "ccc"
        }

    ];
    var score = 0;
    var questionIndex = 0;
    var options= "";


    $(".startbt").on("click", function () {
        currentQuestion = questions[questionIndex].q
        $('.container-main1').hide();
        $('.container-main2').show();



        $("#questionBox").append(questionDiv)
       

        questionDiv.text(currentQuestion)

        for (i=0; i<questions.length; i++){
            // inside here create buttons, 
            // set button text to a,b,c inside array
            // set onclick events
        }



// check to see if the text or data within the button of the event clicked !== question[questionIndex].ans then display or alert "WRONG" and move to next question. that is when you would do questionIndex++








        // display question
        // set timer
        // if timer runs out, pull next question


    });









});