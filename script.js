$(document).ready(function () {

    var questionsArr = [{
            q: "Question 1",
            a: ["aaaa", "bbbb", "cccc", "dddd"],
            ans: "aaaa"
        },
        {
            q: "Question 2.",
            a: ["eeee", "ffff", "gggg", "hhhh"],
            ans: "hhhh"
        },
        {
            q: "Question 3.",
            a: ["aaaa", "bbbb", "cccc", "dddd"],
            ans: "dddd"
        },

        {
            q: "Question 4.",
            a: ["aaaa", "bbbb", "cccc", "dddd"],
            ans: "dddd"
        },

        {
            q: "Question 5.",
            a: ["aaaa", "bbbb", "cccc", "dddd"],
            ans: "dddd"
        }


    ];
    var i = 0;

    $(".startbt").on("click", function () {

        $('.container-main1').hide()
        $('.container-main2').show()

        title = $('#gameTitle')
        question = $('#question')
        options = $('#options')
        var score = 0;

        function check(){
            $('#options').on('click' ,function(event){
                click = event.target;
                if (click.innerHTML == questionsArr[questionIndex].ans) {
                    $("#result").text("you won")
                    $('#options').empty()
                    score++;

                } else {
                    $("#result").text("you lose!")
                    $('#options').empty()


                }    
                
                if(questionIndex < questionsArr.length-1){
                    questionIndex++;
                    renderquestion();
                    //$("#result").empty();
                }

            })
        }

        let questionIndex = 0;

        function renderquestion(){
            let currentQuestion = questionsArr[questionIndex].q;
            question.text(currentQuestion);
                for (var j =0; j<questionsArr[i].a.length; j++){
                    $("#options").append(`<button>${questionsArr[questionIndex].a[j]}</button>`);
                }

        }

        renderquestion();
        check()




    })

})

