console.log("Netflix UI Clone");
let questionBox = document.querySelectorAll('.mainQuestionBox')
let questionBoxArr = Array(questionBox)

for (question of questionBox) {
    question.addEventListener('click', (e) => {
        console.log('Clicked')
        let id = e.target.dataset.id
        // let id =  e.target.getAttribute('data-id')
        console.log(id) 
    })
}