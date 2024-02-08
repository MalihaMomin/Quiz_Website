var nav = document.querySelector("nav")
var row = document.querySelector("#testrow")
var testQuestions = document.querySelector("#testQuestions")

/****************************************** ARRAYS ****************************************************/
var testStorage = [
    {
        id: "t1",
        title: "OOPs",
        subject: "Core Java",
        totalQuestions: 10,
        totalMarks: 50,
        duration: 15,
        date: "20-11-2023",
        questions: [
            {
                qno: 1,
                q: "Which of the following is not OOPS concept in Java?",
                opt1: "Inheritance",
                opt2: "Encapsulation",
                opt3: "Polymorphism",
                opt4: "Compilation",
                ans: 4,
                selected: 0
            },
            {
                qno: 2,
                q: "Which of the following is a type of polymorphism in Java?",
                opt1: "Compile time polymorphism",
                opt2: "Execution time polymorphism",
                opt3: "Multiple polymorphism",
                opt4: "Multilevel polymorphism",
                ans: 1,
                selected: 0
            },
            {
                qno: 3,
                q: "When does method overloading is determined?",
                opt1: "At run time",
                opt2: "At compile time",
                opt3: "At coding time",
                opt4: "At execution time",
                ans: 2,
                selected: 0
            },
            {
                qno: 4,
                q: "Which concept of Java is a way of converting real world objects in terms of class?",
                opt1: "Polymorphism",
                opt2: "Encapsulation",
                opt3: "Abstraction",
                opt4: "Inheritance",
                ans: 3,
                selected: 0
            },
            {
                qno: 5,
                q: "Which concept of Java is achieved by combining methods and attribute into a class?",
                opt1: "Encapsulation",
                opt2: "Inheritance",
                opt3: "Polymorphism",
                opt4: "Abstraction",
                ans: 1,
                selected: 0
            },
            {
                qno: 6,
                q: "Which feature of OOPS described the reusability of code?",
                opt1: "Abstraction",
                opt2: "Encapsulation",
                opt3: "Polymorphism",
                opt4: "Inheritance",
                ans: 4,
                selected: 0
            },
            {
                qno: 7,
                q: "Which feature of OOPS derives the class from another class?",
                opt1: "Inheritance",
                opt2: "Data hiding",
                opt3: "Encapsulation",
                opt4: "Polymorphism",
                ans: 1,
                selected: 0
            },
            {
                qno: 8,
                q: "A single program of OOPS contains _______ classes?",
                opt1: "Only 1",
                opt2: "Only 999",
                opt3: "Only 100",
                opt4: "Any number",
                ans: 4,
                selected: 0
            },
            {
                qno: 9,
                q: "Which of the following definition is incorrect for polymorphism?",
                opt1: "Polymorphism helps in redefining the same functionality",
                opt2: "Polymorphism concept is the feature of object-oriented programming (OOP)",
                opt3: "It always increases the overhead of function definition",
                opt4: "Ease in the readability of the program",
                ans: 3,
                selected: 0
            },
            {
                qno: 10,
                q: "Which among the following cannot be used for the concept of polymorphism?",
                opt1: "Static member function",
                opt2: "Constructor Overloading",
                opt3: "Member function overloading",
                opt4: "Global member function",
                ans: 1,
                selected: 0
            }
        ],
        score: 0
    },
    {
        id: "t2",
        title: "Statements",
        subject: "SQL",
        totalQuestions: 7,
        totalMarks: 70,
        duration: 10,
        date: "22-11-2023",
        questions: [
            {
                qno: 1,
                q: "What is the full form of SQL?",
                opt1: "Structured Query List",
                opt2: "Structure Query Language",
                opt3: "Sample Query Language",
                opt4: "None of these",
                ans: 2,
                selected: 0
            },
            {
                qno: 2,
                q: "Which of the following is not a DDL command?",
                opt1: "TRUNCATE",
                opt2: "ALTER",
                opt3: "CREATE",
                opt4: "UPDATE",
                ans: 4,
                selected: 0
            },
            {
                qno: 3,
                q: "Which of the following are TCL commands?",
                opt1: "COMMIT and ROLLBACK",
                opt2: "UPDATE and TRUNCATE",
                opt3: "SELECT and INSERT",
                opt4: "GRANT and REVOKE",
                ans: 1,
                selected: 0
            },
            {
                qno: 4,
                q: "Which statement is used to delete all rows in a table without having the action logged?",
                opt1: "DELETE",
                opt2: "REMOVE",
                opt3: "DROP",
                opt4: "TRUNCATE",
                ans: 4,
                selected: 0
            },
            {
                qno: 5,
                q: "SQL Views are also known as",
                opt1: "Simple tables",
                opt2: "Virtual tables",
                opt3: "Complex tables",
                opt4: "Actual Tables",
                ans: 2,
                selected: 0
            },
            {
                qno: 6,
                q: "Which of the following is not Constraint in SQL?",
                opt1: "Primary Key",
                opt2: "Not Null",
                opt3: "Check",
                opt4: "Union",
                ans: 4,
                selected: 0
            },
            {
                qno: 7,
                q: "Which data manipulation command is used to combines the records from one or more tables?",
                opt1: "SELECT",
                opt2: "PROJECT",
                opt3: "JOIN",
                opt4: "PRODUCT",
                ans: 3,
                selected: 0
            }
        ],
        score: 0
    },
    {
        id: "t3",
        title: "Javascript",
        subject: "Web Technology",
        totalQuestions: 5,
        totalMarks: 25,
        duration: 7,
        date: "21-11-2023",
        questions: [
            {
                qno: 1,
                q: "Which type of JavaScript language is ___",
                opt1: "Object-Oriented",
                opt2: "Object-Based",
                opt3: "Assembly-language",
                opt4: "High-level",
                ans: 2,
                selected: 0
            },
            {
                qno: 2,
                q: "Which of the following variables takes precedence over the others if the names are the same?",
                opt1: "Global variable",
                opt2: "The local element",
                opt3: "The two of the above",
                opt4: "None of the above",
                ans: 2,
                selected: 0
            },
            {
                qno: 3,
                q: "Which one of the following is an ternary operator:",
                opt1: "?",
                opt2: ":",
                opt3: "-",
                opt4: "+",
                ans: 1,
                selected: 0
            },
            {
                qno: 4,
                q: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
                opt1: "=",
                opt2: "===",
                opt3: "==",
                opt4: "&&",
                ans: 3,
                selected: 0
            },
            {
                qno: 5,
                q: "Which one of the following operator returns false if both values are equal?",
                opt1: "!",
                opt2: "!==",
                opt3: "!=",
                opt4: "All of the above",
                ans: 3,
                selected: 0
            }
        ],
        score: 0
    },
    {
        id: "t4",
        title: "HTML",
        subject: "Web Technology",
        totalQuestions: 5,
        totalMarks: 20,
        duration: 5,
        date: "23-11-2023",
        questions: [
            {
                qno: 1,
                q: "The correct sequence of HTML tags for starting a webpage is -",
                opt1: "Head, Title, HTML, body",
                opt2: "HTML, Body, Title, Head",
                opt3: "HTML, Head, Title, Body",
                opt4: "HTML, Head, Title, Body",
                ans: 4,
                selected: 0
            },
            {
                qno: 2,
                q: "How many sizes of headers are available in HTML by default?",
                opt1: "5",
                opt2: "1",
                opt3: "6",
                opt4: "3",
                ans: 3,
                selected: 0
            },
            {
                qno: 3,
                q: "What are the types of lists available in HTML?",
                opt1: "Ordered, Unordered Lists",
                opt2: "Bulleted, Numbered Lists",
                opt3: "Named, Unnamed Lists",
                opt4: "None of the above",
                ans: 1,
                selected: 0
            },
            {
                qno: 4,
                q: "The hr tag in HTML is used for -",
                opt1: "new line",
                opt2: "vertical ruler",
                opt3: "new paragraph",
                opt4: "horizontal ruler",
                ans: 4,
                selected: 0
            },
            {
                qno: 5,
                q: "Which of the following HTML attribute is used to define inline styles?",
                opt1: "style",
                opt2: "type",
                opt3: "class",
                opt4: "None of the above",
                ans: 1,
                selected: 0
            }
        ],
        score: 0
    },
    {
        id: "t5",
        title: "CSS",
        subject: "Web Technology",
        totalQuestions: 10,
        totalMarks: 50,
        duration: 15,
        date: "23-11-2023",
        questions: [
            {
                qno: 1,
                q: "CSS stands for -",
                opt1: "Cascade style sheets",
                opt2: "Color and style sheets",
                opt3: "Cascading style sheets",
                opt4: "None of the above",
                ans: 3,
                selected: 0
            },
            {
                qno: 2,
                q: "The property in CSS used to change the background color of an element is -",
                opt1: "bgcolor",
                opt2: "color",
                opt3: "background-color",
                opt4: "All of the above",
                ans: 3,
                selected: 0
            },
            {
                qno: 3,
                q: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
                opt1: "p {background-color : yellow;}",
                opt2: "p {background-color : #yellow;}",
                opt3: "all {background-color : yellow;}",
                opt4: "all p {background-color : #yellow;}",
                ans: 1,
                selected: 0
            },
            {
                qno: 4,
                q: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
                opt1: "a {text-decoration : underline;}",
                opt2: "a {decoration : no-underline;}",
                opt3: "a {text-decoration : none;}",
                opt4: "None of the above",
                ans: 3,
                selected: 0
            },
            {
                qno: 5,
                q: "The CSS property used to make the text bold is -",
                opt1: "font-weight : bold",
                opt2: "weight: bold",
                opt3: "font: bold",
                opt4: "style: bold",
                ans: 1,
                selected: 0
            },
            {
                qno: 6,
                q: "Are the negative values allowed in padding property?",
                opt1: "Yes",
                opt2: "No",
                opt3: "Can't say",
                opt4: "May be",
                ans: 2,
                selected: 0
            },
            {
                qno: 7,
                q: "The CSS property used to specify the transparency of an element is -",
                opt1: "opacity",
                opt2: "filter",
                opt3: "visibility",
                opt4: "overlay",
                ans: 1,
                selected: 0
            },
            {
                qno: 8,
                q: "How to select the elements with the class name \"example\"?",
                opt1: "example",
                opt2: "#example",
                opt3: ".example",
                opt4: "Class example",
                ans: 3,
                selected: 0
            },
            {
                qno: 9,
                q: "The CSS property which is used to define the set the difference between two lines of your content is -",
                opt1: "line-height property",
                opt2: "max-height property",
                opt3: "min-height property",
                opt4: "None of the above",
                ans: 1,
                selected: 0
            },
            {
                qno: 10,
                q: "The correct syntax to give a line over text is -",
                opt1: "text-decoration: line-through",
                opt2: "text-decoration: none",
                opt3: "text-decoration: underline",
                opt4: "text-decoration: overline",
                ans: 4,
                selected: 0
            }
        ],
        score: 0
    }
]
var quesStorage = []
var oneQmark = 0
var testid = 0



/****************************************** FOR LOCAL STORAGE ****************************************************/
var storage = []
var local = JSON.parse(localStorage.getItem("mcqportal"))
if(local) {
    storage = local
}



/****************************************** TEST DISPLAY ****************************************************/
var rowtest = document.querySelector(".row")
function displayTest() {
    testStorage.forEach((e)=>{
        rowtest.innerHTML += `
            <div class="cards" id="${e.id}">
                <h3>${e.title}</h3>
                <h4>Subject - <span>${e.subject}</span></h4>
                <h4>Total Questions - <span>${e.totalQuestions}</span></h4>
                <h4>Total Marks - <span>${e.totalMarks}</span></h4>
                <h4>Duration - <span>${e.duration} min</span></h4>
                <h4>Date - <span>${e.date}</span></h4>
                <button class="startTest">Start Test</button>
            </div>
        `
    })
}


/****************************************** TEST FUNCTIONS ****************************************************/
var qbtn = document.querySelector(".qbtn")
var quesno = 1

function startTest() {
    var startbtn = document.querySelectorAll(".startTest")
    startbtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            nav.classList.add("hide")
            row.classList.add("hide")
            testQuestions.classList.remove("hide")

            var parent = btn.parentElement.id
            var testDetails = document.querySelector(".testDetails")
            var testtimer = document.querySelector(".timer")

            testStorage.forEach((tests)=>{
                if(tests.id == parent) {
                    oneQmark = tests.totalMarks / tests.totalQuestions
                    quesStorage = tests.questions
                    testid = tests.id

                    //########## Upper Details ###############
                    testDetails.innerHTML = `
                        <div>
                            <div></div>
                            <div class="qtitle">${tests.title}</div>
                            <div class="qdate">${tests.date}</div>
                        </div>
                        <div>
                            <div>Subject -<span>${tests.subject}</span></div>
                            <div>Marks -<span>${tests.totalMarks}</span></div>
                            <div>Duration -<span>${tests.duration} min</span></div>
                        </div>
                    `

                    //########## Timer ###############
                    testtimer.innerHTML = `${tests.duration} : 00`
                    if(tests.duration < 10) {
                        var duration = `0${tests.duration - 1}`
                    }
                    else {
                        var duration = `${tests.duration - 1}`
                    }
                    var sec = 60
                    function timermin() {
                        duration--
                        if(duration<0) {
                            endTest()
                        }
                        else if(duration < 10) {
                            duration = "0" + duration
                        }
                    }
                    setInterval(timermin, 60000)
                    function timer(){
                        sec--
                        if(sec==0) {
                            sec = 60
                        }
                        else if(sec < 10) {
                            sec = "0" + sec
                        }
                        testtimer.innerHTML = `${duration} : ${sec}`
                    }
                    setInterval(timer, 1000)

                    //########## Question Buttons ###############
                    var totalquestions = tests.totalQuestions
                    for(var i=1; i<=totalquestions; i++) {
                        qbtn.innerHTML += `<button class="questionNumber" id="${i}">${i}</button>`
                    }

                    //########## Questions ###############
                    displayQuestions()
                    questionbtn()
                    save()
                    next(totalquestions)
                    prev(totalquestions)
                    clearSelection()
                }
            })
        })
    })
}



/****************************************** Display Questions ****************************************************/
var testques = document.querySelector(".mainquestion")
function displayQuestions() {
    quesStorage.forEach((ques)=>{
        if(ques.qno == quesno) {
            testques.innerHTML = `
                <p><b>Q.${ques.qno}) ${ques.q}</b></p>
                <input type="radio" name="${ques.qno}" value="1" id=""> ${ques.opt1} <br>
                <input type="radio" name="${ques.qno}" value="2" id=""> ${ques.opt2} <br>
                <input type="radio" name="${ques.qno}" value="3" id=""> ${ques.opt3} <br>
                <input type="radio" name="${ques.qno}" value="4" id=""> ${ques.opt4} <br>
            `
            saveans()
            var quest = document.getElementsByName(`${ques.qno}`)
            quest.forEach((opt)=>{
                if(opt.value == ques.selected) {
                    opt.checked = true
                }
            })
        }
        // var quest = document.getElementsByName(`${ques.qno}`)
        // quest.forEach((opt)=>{
        //     if(opt.checked) {
        //         ques.selected = opt.value
        //     }
        // })
    })
}



/****************************************** SAVE ANSWER BUTTON ****************************************************/
var saveansbtn = document.querySelector(".saveans")
function saveans() {
    saveansbtn.addEventListener("click", ()=>{
        quesStorage.forEach((ques)=>{
            if(ques.qno == quesno) {
                var quest = document.getElementsByName(`${ques.qno}`)
                quest.forEach((opt)=>{
                    if(opt.checked) {
                        ques.selected = opt.value
                    }
                })
                var quesbtn = qbtn.querySelectorAll("button")
                quesbtn.forEach((btn)=>{
                    if(quesno == btn.innerHTML && ques.selected!=0) {
                        btn.style = `
                            background-color: greenyellow;
                            border-color: greenyellow;
                        `
                    }
                })
            }
        })

    })
}



/****************************************** QUESTION BUTTONS ****************************************************/
function questionbtn() {
    var quesbtn = qbtn.querySelectorAll("button")
    quesbtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            quesno = btn.innerHTML  
            displayQuestions()                     
        })
    })
}



/****************************************** SAVE ****************************************************/
var saveques = document.querySelector(".save")
function save() {
    saveques.addEventListener("click", ()=>{
        var quesbtn = qbtn.querySelectorAll("button")
        quesbtn.forEach((btn)=>{
            if(quesno == btn.innerHTML) {
                btn.style = `
                    background-color: yellow;
                    border-color: yellow;
                `
            }
        })
    })
}



/****************************************** NEXT ****************************************************/
var nextques = document.querySelector(".next")
function next(totalq) {
    nextques.addEventListener("click", ()=>{
        quesno++
        if(quesno > totalq) {
            quesno = 1
        }
        displayQuestions()
    })
}



/****************************************** PREVIOUS ****************************************************/
var prevques = document.querySelector(".prev")
function prev(totalq) {
    prevques.addEventListener("click", ()=>{
        quesno--
        if(quesno < 1) {
            quesno = totalq
        }
        displayQuestions()
    })
}



/****************************************** CLEAR SELECTION ****************************************************/
var clear = document.querySelector(".clearSelection")
function clearSelection() {
    clear.addEventListener("click", ()=>{
        quesStorage.forEach((ques)=>{
            var q = document.getElementsByName(`${ques.qno}`)
            q.forEach((opt)=>{
                opt.checked = false;
            })
            if(ques.qno == quesno) {
                ques.selected = 0
            }

            var quesbtn = qbtn.querySelectorAll("button")
            quesbtn.forEach((btn)=>{
                if(quesno == btn.innerHTML && ques.selected==0) {
                    btn.style = `
                        background-color: lightgray;
                        border-color: lightgray;
                    `
                }
            })
        })
    })
}



/****************************************** FINISH ****************************************************/
var finishtest = document.querySelector("#finish")
var testSection = document.querySelector(".test")
var resultSection = document.querySelector("#result")
var finalresult = document.querySelector(".finalresult")
var correct = 0
var incorrect = 0
var unattempted = 0
var marksObt = 0

function endTest() {
    qbtn.innerHTML = ``
    testSection.classList.add("hide")
    resultSection.classList.remove("hide")
    quesStorage.forEach((que)=>{
        if(que.ans == que.selected) {
            marksObt = marksObt + oneQmark
            correct++
        }
        else if(que.selected == 0) {
            unattempted++
        }
        else {
            incorrect++
        }
    })

    testStorage.forEach((testq)=>{
        if(testid == testq.id) {
            finalresult.innerHTML = `
                <h3>${testq.title}</h3>
                <h4>Total Questions - <span>${testq.totalQuestions}</span></h4>
                <h4>Correct - <span>${correct}</span></h4>
                <h4>Incorrect - <span>${incorrect}</span></h4>
                <h4>Unattempted - <span>${unattempted}</span></h4>
                <h4>Total Marks - <span>${testq.totalMarks}</span></h4>
                <h4>Marks Obtained - <span>${marksObt}</span></h4>
            `

            var exist = false
            storage.forEach((s)=>{
                if((testid == s.id) && (marksObt > s.score)) {
                    s.questions = quesStorage
                    s.score = marksObt
                    // s = obj
                    exist = true
                }
                else if((testid == s.id) && (marksObt <= s.score)) {
                    exist = true
                }
            })
            if(!exist) {
                testq.questions = quesStorage
                testq.score = marksObt
                var obj = testq
                storage.push(obj)
            }

            localStorage.setItem("mcqportal", JSON.stringify(storage))
        }
    })
}

function finish() {
    finishtest.addEventListener("click", ()=>{
        endTest()
    })
}

function ok() {
    var okbtn = document.querySelector(".ok")
    okbtn.addEventListener("click", ()=>{
        resultSection.classList.add("hide")
        testSection.classList.remove("hide")
        nav.classList.remove("hide")
        row.classList.remove("hide")

        location.reload()
    })
}



/****************************************** MAIN METHOD ****************************************************/
function main() {
    displayTest()
    startTest()
    finish()
    ok()
}
main()