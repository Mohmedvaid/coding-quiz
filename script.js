$(document).ready(function () {

    var questions = [{
            q: "This is question 1.",
            a: ["aaaa", "bbbb", "cccc"],
            ans: "aaaa"
        },
        {
            q: "This is question 2.",
            a: ["aaaa", "bbbb", "cccc"],
            ans: "cccc"
        }

    ];
    var score = 0;
    var questionIndex = 0;
    var options = "";


    $(".startbt").on("click", function () {
        //currentQuestion = questions[questionIndex].q
        $('.container-main1').hide();
        $('.container-main2').show();

        var j = 0;
        var printQ = function () {
            for (var i = 0; i < questions[j].a.length; i++) {
                $('#question').html(questions[j].q)
                $('#options').append(`<button>${questions[j].a[i]}</button>`)
            }
        }
        printQ();

        $('button').on('click', function (event) {
            var click = event.target
            if (click.innerHTML != questions[j].ans) {
                $("#result").text("you lose")
                j++
                $('#options').empty()

                printQ()

            } else {
                $("#result").text("you win!")
                j++
                $('#options').empty()
                printQ()
            }
        })

    })




    // inside here create buttons, 
    // set button text to a,b,c inside array
    // set onclick events


    //$("#questionBox").append(questionDiv)






    // check to see if the text or data within the button of the event clicked !== question[questionIndex].ans then display or alert "WRONG" and move to next question. that is when you would do questionIndex++








    // display question
    // set timer
    // if timer runs out, pull next question



})