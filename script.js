$(document).ready(function () {

    var questionsArr = [{
            q: "Inside which HTML element do we put the JavaScript?",
            a: ["js", "Scripting", "script", "javascript"],
            ans: "script"
        },
        {
            q: "How do you write \"Hello World\" in an alert box?",
            a: ["alert(\"Hello World\");", "msg(\"Hello World\");", "msgBox(\"Hello World\");", "promt(\"Hello World\");"],
            ans: "alert(\"Hello World\");"
        },
        {
            q: "How do you create a function in JavaScript?",
            a: ["function:myFunction()", "function = myFunction()", "function myFunction()", "myFunction(create)"],
            ans: "function myFunction()"
        },

        {
            q: "How do you call a function named \"myFunction\"?",
            a: ["myFunction()", "call funtion myFunction()", "call myFunction()", "myFunction(call)"],
            ans: "myFunction()"
        },

        {
            q: "How to write an IF statement in JavaScript?",
            a: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
            ans: "if (i == 5)"
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
        var highscore = $('#highscore')
        

        function check(){
            $('#options').on('click' ,function(event){
                click = event.target;
                if (click.innerHTML == questionsArr[questionIndex].ans) {
                    $("#result").text("Correct!")
                    $('#options').empty()
                    score++;
                    highscore.text=`Highscore: ${score}`
                    console.log(highscore.innerHTML=`Highscore: ${score}`)

                    setTimeout(function(){
                        $("#result").empty();
                     }, 1000);

                } else {
                    $("#result").text("Incorrect!")
                    $('#options').empty()
                    console.log(highscore.innerHTML=`Highscore: ${score}`)
                    setTimeout(function(){
                        $("#result").empty();
                     }, 1000);



                }    
                
                if(questionIndex < questionsArr.length-1){
                    questionIndex++;
                    title.text(`Question ${questionIndex+1} Timer: ${time}`)
                    renderquestion();
                    //$("#result").empty();
                }

            })
        }
        
        

        let questionIndex = 0;
        let time = 10000;
        timer = $('Timer')

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

