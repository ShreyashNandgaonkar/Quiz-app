let shuffledquestion, currentquestionindex
const questionelement = document.getElementById('question')
const answerbutton = document.getElementById('answer-button')
function startgame(){


startbutton.classList.add('hide');
questioncontainer.classList.remove('hide')

shuffledquestion=questions.sort(() =>Math.random() - .5)
currentquestionindex=0
nextquest()
}


function nextquest(){
resetState()
showQuestion(shuffledquestion[currentquestionindex])

}

function showQuestion(question){
    questionelement.innerText=question.question
    question.answers.forEach(answer =>{
        const button =document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click', selectanswer)
        answerbutton.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)
    }
}


function selectanswer(e){
const selectedbutton = e.target
const correct =selectedbutton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerbutton.children).forEach(button => {setStatusClass(button,button.dataset.correct)})
if(shuffledquestion.length > currentquestionindex + 1) {
    nextbutton.classList.remove('hide')
} else {
    startbutton.innerText = 'Restart'
    startbutton.classList.remove('hide')
}

}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
    

}
const startbutton=document.getElementById('start-btn');
const nextbutton=document.getElementById('next-btn');
startbutton.addEventListener('click',startgame);
nextbutton.addEventListener('click',()=>{
    currentquestionindex++
    nextquest()
})
const questioncontainer=document.getElementById('quest-container')
const questions =[
    {
        question: 'What is 5+2?',
        answers:[
            {text:'7',correct:true},
            {text:'2',correct:false},   
            {text:'27',correct:false},   
            {text:'6',correct:false},   
            
        ]
    },
    {
        question:'What is the national bird of India',
        answers:[
            {text:'Tiger',correct:false},
            {text:'Peacock',correct:true},
            {text:'Crow',correct:false},
            {text:'Sparrow',correct:false},
        ]
    },
    {
        question:'Who invented Apple',
        answers:[
            {text:'Newton',correct:false},
            {text:'Steve Jobs',correct:false},
            {text:'Nature Earth',correct:true},
            {text:'Trees',correct:false},
        ]
    },
    {
        question:'Who is the first CEO of microsoft',
        answers:[
            {text:'Satya Nadella',correct:false},
            {text:'Bill Gates',correct:true},
            {text:'Larry Page',correct:false},
            {text:'Your dad',correct:false},
        ]
    },
    {
        question:'How many planets are there in our solar system',
        answers:[
            {text:'12',correct:false},
            {text:'9',correct:false},
            {text:'10',correct:true},
            {text:'11',correct:false},
        ]
    },
    {
        question:'What is the average age of a human being',
        answers:[
            {text:'100',correct:false},
            {text:'60',correct:true},
            {text:'80',correct:false},
            {text:'50',correct:false},
        ]
    },
    {
        question:'What came first?',
        answers:[
            {text:'God',correct:false},
            {text:'human being',correct:false},
            {text:'egg',correct:false},
            {text:'chicken',correct:true},
        ]
    },
    {
        question:'Which is the fastest car',
        answers:[
            {text:'Lamborghini',correct:false},
            {text:'Bugati',correct:true},
            {text:'BMW',correct:false},
            {text:'Mustang',correct:false},
        ]
    },
    {
        question:'Which is the largest Tiger reserve in India',
        answers:[
            {text:'Manas',correct:false},
            {text:'Nagarjuna',correct:true},
            {text:'Pench',correct:false},
            {text:'Corbett',correct:false},
        ]
    },
    {
        question:'Which is the earliest engineering institute in India ',
        answers:[
            {text:'IISC',correct:false},
            {text:'IIT Bombay',correct:false},
            {text:'IIT Roorkee',correct:true},
            {text:'BITS Pilani',correct:false},
        ]
    },
    {
        question:'Which is the fastest running train on Indian railways',
        answers:[
            {text:'New Del-Bhopal, shatabdi',correct:false},
            {text:'New Del-Mum, Rajdhani exp',correct:false},
            {text:'New Del-Agra,Gatimann exp',correct:true},
            {text:'New Del-Lucknow, Shatabdi exp',correct:false},
        ]
    },
    {
        question:'Which is the first national park established in India',
        answers:[
            {text:'Velvadan National Park',correct:false},
            {text:'Periyar National Park',correct:false},
            {text:'Bandipur National Park',correct:false},
            {text:'Corbett National Park',correct:true},
        ]
    },
    {
        question:'First Indian to be a fellow of the Royal Society of London',
        answers:[
            {text:'P.C. Mahalanobis',correct:false},
            {text:'C.V.Raman',correct:false},
            {text:'Srinivas Ramanujan',correct:false},
            {text:'A.C.Wadia',correct:true},
        ]
    },
    {
        question:'Which is the first colour movie produced in India',
        answers:[
            {text:'Madhumati',correct:false},
            {text:'Kisan Kanya',correct:true},
            {text:'AAN',correct:false},
            {text:'Do bhige zameen',correct:false},
        ]
    },
    {
        question:'Longest river is',
        answers:[
            {text:'Nile',correct:true},
            {text:'Amazon',correct:false},
            {text:'Missisippi',correct:false},
            {text:'Yangto Kayong',correct:false},
        ]
    },
    {
        question:'Which city used first electricity commercially',
        answers:[
            {text:'Darjeeling',correct:true},
            {text:'Kolkata',correct:false},
            {text:'Chennai',correct:false},
            {text:'Mumbai',correct:false},
        ]
    },
    {
        question:'First woman prime minister in world',
        answers:[
            {text:'Srimao Bhandarnaike',correct:true},
            {text:'Indidra Gandhi',correct:false},
            {text:'Goldameer',correct:false},
            {text:'Margerei Thacher',correct:false},
        ]
    },
    {
        question:'First private channel of FM in India was started at',
        answers:[
            {text:'Chennai',correct:false},
            {text:'Bangalore',correct:true},
            {text:'Mumbai',correct:false},
            {text:'Kolkata',correct:false},
        ]
    },
    {
        question:'Worlds largest archipelago',
        answers:[
            {text:'Phillipines',correct:false},
            {text:'Indonesia',correct:true},
            {text:'Sweden',correct:false},
            {text:'Greenland',correct:false},
        ]
    },
]

