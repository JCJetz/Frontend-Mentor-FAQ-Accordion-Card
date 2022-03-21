

//Select element from de DOM
  //const questions = document.querySelectorAll('.question');

//Loop throgh all the elements & add an event listener to them

//questions.forEach((question) => question.addEventListener('click', () => {
  //  if (question.parentNode.classList.contains('active')) {
    //    question.parentNode.classList.toggle('active')
  //  } else { 
    //    questions.forEach((question) => question.parentNode.classList.remove('active'));
      //  question.parentNode.classList.add('active')
   // }
// })
// );
//-------------------




this.addEventListener("DOMContentLoaded", () => {
    const question_accordion = document.querySelectorAll(".question")
    question_accordion.forEach((question) => question.addEventListener("click", () => {
        if (question.parentNode.classList.contains("active")) {
           question.parentNode.classList.toggle("active")
           //question.parentNode.classList.toggle("active")
        } else {                 
        question_accordion.forEach(question => question.parentNode.classList.remove("active"))
           question.parentNode.classList.add("active") 
        //question_answer_accordion.forEach(question => question.parentNode.classList.remove("active"))
        //   question.parentNode.classList.add("active")          
        }

    }))
})

//Esto no funciona.
const question_answer_accordion = document.querySelectorAll(".questions")
question_answer_accordion.forEach((question) => 
question.addEventListener("click", () => {
    question.parentNode.classList.toggle("active");
        }))


        nextElementSibling


  //      this.addEventListener("DOMContentLoaded", () => {
    //        const question_answer_accordion = document.querySelectorAll(".question")
      //      question_answer_accordion.forEach((question) => question.addEventListener("click", () => {
        //        if (question.parentNode.classList.contains("active")) {
          //         question.parentNode.classList.toggle("active")

            //       answer.parentNode.classList.toggle("active")


       //         } else {                 
         //       question_answer_accordion.forEach(question => question.parentNode.classList.remove("active"))
           //        question.parentNode.classList.add("active") 


                   

        //        question_answer_accordion.forEach(question => question.parentNode.classList.remove("active"))
        //           question.siblingParentNode.classList.add("active")    
          //      }
        
     //       }))
   //     })
        