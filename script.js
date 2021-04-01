const quizData = [
    {
        question:"what is full form of JS",
        a:"javascript",
        b:"jaojji",
        c:"jajabhas",
        d:"javasubmit",
        correct:"a"
    },
    {
        question:"what is the most used programming language in 2019",
        a:"javascrpt",
        
        b:"java",
        c:"python",
        d:"pearl",
        correct:"b"
    },
    {
        question:"who is the president of INDIA",
        a:"narendra modi",
        b:"amit shah",
        c:"ram nath kovind",
        d:"sitharaman",
        correct:"c"
    },
    {
        question:"in which year javascript launch",
        a:"1992",
        b:"1993",
        c:"1994",
        d:"1995",
        correct:"d"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit");
let scores = document.getElementById("score")

 
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
    function getSelected() {
        let answer = undefined;
        answerEls.forEach((answerEl) => {
            


            
            if(answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;
    }
    function deselectAnswer(){
        answerEls.forEach((answerEl)=>{
           answerEl.checked=false;
        });
    }
    submitBtn.addEventListener("click", ()=>{
        const answer = getSelected();

        if(answer){
            if(answer === quizData[currentQuiz].correct){
             score++;
             
            }
            currentQuiz++;
            if(currentQuiz<quizData.length){
                loadQuiz();
            }else{
                
                quiz.innerHTML=`<h2> your score is ${score}/${quizData.length} this
                <button onclick="location.reload()">Reload</button>`;
                
            }
        }
    });
   
    
    