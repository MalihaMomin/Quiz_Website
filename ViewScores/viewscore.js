var testcont = document.querySelector("#cont")
var anscont = document.querySelector("#answers")
var backbtn = document.querySelector("#back")

var storage = JSON.parse(localStorage.getItem("mcqportal"))
var qstorage = []



/****************************************** DISPLAY TEST ****************************************************/
function display() {
    if(!storage) {
        testcont.innerHTML = `
            <div class="notest">
                <h3>No Scores Available</h3>
            </div>
        `
    }
    else {
        testcont.innerHTML = ``
        storage.find((test)=>{
            testcont.innerHTML += `
                <div class="test" id="${test.id}">
                    <h1>${test.title}</h1>
                    <div>
                        <h3>${test.subject}</h3>
                        <h3>${test.date}</h3>
                        <h3>${test.totalQuestions} Qs</h3>
                        <h3>${test.duration} min</h3>
                        <h3><span>${test.score}</span> / ${test.totalMarks} marks</h3>
                        <button class="view">View Answers</button>
                    </div>
                </div>
            `
        })
    }
}



/****************************************** VIEW ANSWER ****************************************************/
var ansdetails = document.querySelector(".ansdet")
var qlist = document.querySelector(".questionlist")
function view() {
    var viewans = document.querySelectorAll(".view")
    viewans.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            testcont.classList.add("hide")
            anscont.classList.remove("hide")

            var parent = btn.parentElement.parentElement.id

            storage.forEach((test)=>{
                if(parent == test.id) {
                    qstorage = test.questions
                    ansdetails.innerHTML = `
                        <h1>${test.title}</h1>
                        <div class="details">
                            <h3>${test.subject}</h3>
                            <h3>Marks - <span>${test.score}</span> / ${test.totalMarks}</h3>
                        </div>
                    `

                    qstorage.forEach((ques)=>{
                        qlist.innerHTML += `
                            <div class="questions" id="${ques.qno}">
                                <p class="q">Q.${ques.qno}) ${ques.q}</p>
                                <p>Options:</p>
                                <ul>
                                    <li>${ques.opt1}</li>
                                    <li>${ques.opt2}</li>
                                    <li>${ques.opt3}</li>
                                    <li>${ques.opt4}</li>
                                </ul>
                                <h4>Selected Option: ${ques.selected}</h4>
                                <h4>Correct Option: ${ques.ans}</h4>
                            </div>
                        `
                        var correctans = document.getElementById(`${ques.qno}`)
                        if(ques.ans == ques.selected) {
                            correctans.classList.add("correct")
                        }
                        else {
                            correctans.classList.add("incorrect")
                        }
                    })
                }
            })
        })
    })
}



/****************************************** BACK BUTTON ****************************************************/
function back() {
    backbtn.addEventListener("click", ()=>{
        anscont.classList.add("hide")
        testcont.classList.remove("hide")

        location.reload()
    })
}



/****************************************** MAIN METHOD ****************************************************/
function main() {
    display()
    view()
    back()
}
main()
