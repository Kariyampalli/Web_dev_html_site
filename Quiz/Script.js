var questionPointer = 0;
var currentScore =0;
var rightAnswers =0;
var wrongAnswers =0;
var bar = 0;
var quizFinished = false;

var _warningcolor = "btn btn-warning";

document.body.onload = Next;
document.getElementById("nextButton").onclick = Next;
document.getElementById("previousButton").onclick = GoBack;


function Next()
{
    if(questionPointer < 10)
    {      
        document.getElementById("Question").textContent = questions[questionPointer].question;
        document.getElementById("questionButton1").textContent = questions[questionPointer].answers[0].answer;
        Colors(document.getElementById("questionButton1").textContent,1);
        document.getElementById("questionButton2").textContent = questions[questionPointer].answers[1].answer;
        Colors(document.getElementById("questionButton2").textContent,2);
        document.getElementById("questionButton3").textContent = questions[questionPointer].answers[2].answer;
        Colors(document.getElementById("questionButton3").textContent,3);
        document.getElementById("questionButton4").textContent = questions[questionPointer].answers[3].answer;
        Colors(document.getElementById("questionButton4").textContent,4);
        questionPointer++;
    }
    else{
       
        if(bar == 100)
        {
            ShowScore();
        }

    }
}
function GoBack(){
    if(questionPointer > 0)
    {
    questionPointer--;
    document.getElementById("Question").textContent = questions[questionPointer].question;
    document.getElementById("questionButton1").textContent = questions[questionPointer].answers[0].answer;
    Colors(document.getElementById("questionButton1").textContent,1);
    document.getElementById("questionButton2").textContent = questions[questionPointer].answers[1].answer;
    Colors(document.getElementById("questionButton2").textContent,2);
    document.getElementById("questionButton3").textContent = questions[questionPointer].answers[2].answer;
    Colors(document.getElementById("questionButton3").textContent,3);
    document.getElementById("questionButton4").textContent = questions[questionPointer].answers[3].answer;
    Colors(document.getElementById("questionButton4").textContent,4);
    }
}


function Colors(_answer, _id)
{

    questions.forEach(q =>{
        if(q.answers[_id-1].answer == _answer)
        {                    
            if(q.answers[_id-1].Clicked == "true") 
            {      
                if(quizFinished && q.answers[_id-1].IsRight == "false")
                {
                    document.getElementById("questionButton" + _id).className = "btn btn-warning"   
                }
                else{
                    document.getElementById("questionButton" + _id).className = "btn btn-success"      
                }
                    
            }
            else
            {

                if(quizFinished)
                {
                  
                    if(q.answers[_id-1].IsRight == "true")
                    {
                        document.getElementById("questionButton" + _id).className = "btn btn-success";
                   }
                    else{
                        document.getElementById("questionButton" + _id).className = "btn btn-danger";
                     }
                    
                }
             else{
                document.getElementById("questionButton" + _id).className = "btn btn-dark";
                }
            }
        } 
 });
return undefined;
}




document.getElementById("questionButton1").onclick = function()
{
  if(!quizFinished)
  {
   if(document.getElementById("questionButton1").className == "btn btn-success")
   {
    UnChoseAnswer(document.getElementById("questionButton1").textContent,1) 
   }
   else
   {
    ChoseAnswer(document.getElementById("questionButton1").textContent,1) 
   }
}
}

document.getElementById("questionButton2").onclick = function()
{
    if(!quizFinished)
  {
   if(document.getElementById("questionButton2").className == "btn btn-success")
   {
  
    UnChoseAnswer(document.getElementById("questionButton2").textContent,2)
   }
   else
   {
     
    ChoseAnswer(document.getElementById("questionButton2").textContent,2)  
   }
}
}

document.getElementById("questionButton3").onclick = function()
{
    if(!quizFinished)
  {
   if(document.getElementById("questionButton3").className == "btn btn-success")
   {
 
    UnChoseAnswer(document.getElementById("questionButton3").textContent,3)
   }
   else
   {
     
    ChoseAnswer(document.getElementById("questionButton3").textContent,3) 
   }
}
}

document.getElementById("questionButton4").onclick = function()
{
    if(!quizFinished)
    {
   if(document.getElementById("questionButton4").className == "btn btn-success")
   { 
    UnChoseAnswer(document.getElementById("questionButton4").textContent,4)
   }
   else
   { 
    ChoseAnswer(document.getElementById("questionButton4").textContent,4)
   }
}
}




function UpdateProgressBar(_subtract)
{   
    if(_subtract && bar!=0)
    {
        bar = bar - 10;
        document.getElementById("progressBar").style = "width: " + bar + "%";
    }
    if(!_subtract && bar!=100)
    {
        bar = bar + 10;
        document.getElementById("progressBar").style = "width: " + bar + "%";
    }
}

function ChoseAnswer(_answer,_id)
{
    questions.forEach(q =>{
            if(q.answers[_id-1].answer == _answer)
            {      
               
                if(q.Clicked == 0)
                {
                   
                q.Clicked++;
                

                document.getElementById("questionButton" +_id).className="btn btn-success"
                UpdateProgressBar(false); 
                q.answers[_id-1].Clicked = "true"
                if(q.answers[_id-1].IsRight == "true") 
                { 
                rightAnswers++;            
                }
                else
                {
                wrongAnswers++;
                }       
                 
                }          
 
            } 
     });
    
    return undefined;
}

function UnChoseAnswer(_answer,_id)
{
    questions.forEach(q =>{
        if(q.answers[_id-1].answer == _answer)
        {
           
            if(q.Clicked == 1)
            { 
                q.Clicked--;
                document.getElementById("questionButton" + _id).className="btn btn-dark"  
                UpdateProgressBar(true);
           
                q.answers[_id-1].Clicked = "false"
                if(q.answers[_id-1].IsRight == "true")
                {           
                rightAnswers--;            
                }
                else
                {
                wrongAnswers--;
                }     
         
            }    
        } 
 });
return undefined;
}




function ShowScore()
{
    document.getElementById("totalScore").textContent = "TOTAL SCORE: " + Math.round((rightAnswers / 10)*100) + "%";
    document.getElementById("totalRightAnswer").textContent = "TOTAL RIGHT ANSWERS: " + rightAnswers;
    document.getElementById("totalWrongAnswer").textContent = "TOTAL WRONG ANSWERS: " + wrongAnswers;
     
    quizFinished = true;
}












var questions = [
    {
question:"Which one of these games is currently underrated?",
Clicked: 0,
answers:[
{
answer: "Roblox",
IsRight:"true",
Clicked: "false"
},
{
    answer: "Fortnite",
    IsRight:"false",
    Clicked: "false"
    },
    {
        answer: "Call Of Duty (The new ones)",
        IsRight:"false",
        Clicked: "false"
        },
        {
            answer: "Happy Wheels",
            IsRight:"false",
            Clicked: "false"
            },
]
},


{
    question:"Which of these devil fruits is the best in Blox Fruits?",
    Clicked: 0,
    answers:[
    {
    answer: "Rubber",
    IsRight:"false",
    Clicked: "false"
    },
    {
        answer: "Chopp",
        IsRight:"false",
        Clicked: "false"
        },
        {
            answer: "Light",
            IsRight:"true",
            Clicked: "false"
            },
            {
                answer: "Spring",
                IsRight:"false",
                Clicked: "false"
                },
    ]
    },

{
    question:"Whats the last rank called in Call Of Duty",
    Clicked: 0,
    answers:[
    {
    answer: "Prestige Master",
    IsRight:"true",
    Clicked: "false"
    },
    {
        answer: "Champion",
        IsRight:"false",
        Clicked: "false"
        },
        {
            answer: "Apex Predator",
            IsRight:"false",
            Clicked: "false"
            },
            {
                answer: "Legendary soldier",
                IsRight:"false",
                Clicked: "false"
                },
    ]
    },


    {
        question:"Which cards/or combos are the most disgraceful cards to play in clash royale",
        Clicked: 0,
        answers:[
        {
        answer: "Pekka + Wizard",
        IsRight:"false",
        Clicked: "false"
        },
        {
            answer: "Ice + Hog",
            IsRight:"false",
            Clicked: "false"
            },
            {
                answer: "mini pekka <3",
                IsRight:"false",
                Clicked: "false"
                },
                {
                    answer: "Literally any toxic cicle deck especially including hog rider, tesla tower or x-bow",
                    IsRight:"true",
                    Clicked: "false"
                    },
        ]
        },


        {
            question:"Which of these Pokemons is the biggest meme (Among the Pokemon players?)",
            Clicked: 0,
            answers:[
            {
            answer: "Magikarp",
            IsRight:"false",
            Clicked: "false"
            },
            {
                answer: "Bidoof",
                IsRight:"true",
                Clicked: "false"
                },
                {
                    answer: "Pikachu",
                    IsRight:"false",
                    Clicked: "false"
                    },
                    {
                        answer: "Luvdisc",
                        IsRight:"false",
                        Clicked: "false"
                        },
            ]
            },

            {
                question:"Which of these character would win in a brawl?",
                Clicked: 0,
                answers:[
                {
                answer: "Superman",
                IsRight:"true",
                Clicked: "false"
                },
                {
                    answer: "Omni-Man",
                    IsRight:"false",
                    Clicked: "false"
                    },
                    {
                        answer: "Homelander",
                        IsRight:"false",
                        Clicked: "false"
                        },
                        {
                            answer: "Metro man",
                            IsRight:"false",
                            Clicked: "false"
                            },
                ]
                },


                {
                    question:"Who doesn't belong in the Naruto-verse?",
                    Clicked: 0,
                    answers:[
                    {
                    answer: "Itachi",
                    IsRight:"false",
                    Clicked: "false"
                    },
                    {
                        answer: "Boruto",
                        IsRight:"false",
                        Clicked: "false"
                        },
                        {
                            answer: "Zorro",
                            IsRight:"false",
                            Clicked: "false"
                            },
                            {
                                answer: "Goku",
                                IsRight:"true",
                                Clicked: "false"
                                },
                    ]
                    },

                    {
                        question:"In which game(s) do you need actual skill?",
                        Clicked: 0,
                        answers:[
                        {
                        answer: "Naruto Shippuden Ninja Storm 4",
                        IsRight:"true",
                        Clicked: "false"
                        },
                        {
                            answer: "Among us",
                            IsRight:"false",
                            Clicked: "false"
                            },
                            {
                                answer: "Sudoku",
                                IsRight:"false",
                                Clicked: "false"
                                },
                                {
                                    answer: "War Zone",
                                    IsRight:"false",
                                    Clicked: "false"
                                    },
                        ]
                        },


                        
                    {
                        question:"Which of these game isn't related in the closest way with the others?",
                        Clicked: 0,
                        answers:[
                        {
                        answer: "One Piece Pirate Warrior",
                        IsRight:"true",
                        Clicked: "false"
                        },
                        {
                            answer: "Injustice 2",
                            IsRight:"false",
                            Clicked: "false"
                            },
                            {
                                answer: "Mortal Kombat",
                                IsRight:"false",
                                Clicked: "false"
                                },
                                {
                                    answer: "Tekken",
                                    IsRight:"false",
                                    Clicked: "false"
                                    },
                        ]
                        },


                        {
                            question:"Guess what my favourite devil fruit is",
                            Clicked: 0,
                            answers:[
                            {
                            answer: "Quake",
                            IsRight:"false",
                            Clicked: "false"
                            },
                            {
                                answer: "Buddah",
                                IsRight:"false",
                                Clicked: "false"
                                },
                                {
                                    answer: "Dark",
                                    IsRight:"false",
                                    Clicked: "false"
                                    },
                                    {
                                        answer: "Light",
                                        IsRight:"true",
                                        Clicked: "false"
                                        },
                            ]
                            },
] 
