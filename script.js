//board - layout
let mainBoard = document.querySelector(".main-board");

//questions row 1
let question1 = document.querySelector(".q-one-a");

let question = document.querySelectorAll(".question");
let questionArea = document.querySelector(".question-section");
let question2 = document.querySelector(".q-two-a");
let question3 = document.querySelector(".q-three-a");
let question4 = document.querySelector(".q-four-a");
let question5 = document.querySelector(".q-five-a");
let question6 = document.querySelector(".q-six-a");

//questions row 2
let question7 = document.querySelector(".q-one-b");
let question8 = document.querySelector(".q-two-b");
let question9 = document.querySelector(".q-three-b");
let question10 = document.querySelector(".q-four-b");
let question11 = document.querySelector(".q-five-b");
let question12 = document.querySelector(".q-six-b");

//questions row 3
let question13 = document.querySelector(".q-one-c");
let question14 = document.querySelector(".q-two-c");
let question15 = document.querySelector(".q-three-c");
let question16 = document.querySelector(".q-four-c");
let question17 = document.querySelector(".q-five-c");
let question18 = document.querySelector(".q-six-c");

//question row 4
let question19 = document.querySelector(".q-one-d");
let question20 = document.querySelector(".q-two-d");
let question21 = document.querySelector(".q-three-d");
let question22 = document.querySelector(".q-four-d");
let question23 = document.querySelector(".q-five-d");
let question24 = document.querySelector(".q-six-d");

//question row 5
let question25 = document.querySelector(".q-one-e");
let question26 = document.querySelector(".q-two-e");
let question27 = document.querySelector(".q-three-e");
let question28 = document.querySelector(".q-four-e");
let question29 = document.querySelector(".q-five-e");
let question30 = document.querySelector(".q-six-e");

//answers row 1
//answers
let answerSection = document.querySelector(".answer-section");
let answer1 = document.querySelector(".a-one-a");
let answer2 = document.querySelector(".a-two-a");
let answer3 = document.querySelector(".a-three-a");
let answer4 = document.querySelector(".a-four-a");
let answer5 = document.querySelector(".a-five-a");
let answer6 = document.querySelector(".a-six-a");

//answers row 2
let answer7 = document.querySelector(".a-one-b");
let answer8 = document.querySelector(".a-two-b");
let answer9 = document.querySelector(".a-three-b");
let answer10 = document.querySelector(".a-four-b");
let answer11 = document.querySelector(".a-five-b");
let answer12 = document.querySelector(".a-six-b");

//answer row 3
let answer13 = document.querySelector(".a-one-c");
let answer14 = document.querySelector(".a-two-c");
let answer15 = document.querySelector(".a-three-c");
let answer16 = document.querySelector(".a-four-c");
let answer17 = document.querySelector(".a-five-c");
let answer18 = document.querySelector(".a-six-c");

//answer row 4
let answer19 = document.querySelector(".a-one-d");
let answer20 = document.querySelector(".a-two-d");
let answer21 = document.querySelector(".a-three-d");
let answer22 = document.querySelector(".a-four-d");
let answer23 = document.querySelector(".a-five-d");
let answer24 = document.querySelector(".a-six-d");

//answer row 5
let answer25 = document.querySelector(".a-one-e");
let answer26 = document.querySelector(".a-two-e");
let answer27 = document.querySelector(".a-three-e");
let answer28 = document.querySelector(".a-four-e");
let answer29 = document.querySelector(".a-five-e");
let answer30 = document.querySelector(".a-six-e");

//score
let score1 = document.querySelector(".score-one");
let score2 = document.querySelector(".score-two");

//keeping track of the journey
let currentQ = "200-a";

let team1Score = 0;
let team2Score = 0;

mainBoard.addEventListener("click", (event) => {
  let x = event.target.classList;
  switch (true) {
    case x.contains("box-one-a"):
      mainBoard.classList.toggle("is-off");
      question1.classList.toggle("q-one-a");
      currentQ = "200-a";
      document.querySelector(".text-one-a").innerText = " ";
      break;

    case x.contains("box-two-a"):
      mainBoard.classList.toggle("is-off");
      question2.classList.toggle("q-two-a");
      currentQ = "200-b";
      document.querySelector(".text-two-a").innerText = " ";
      break;

    case x.contains("box-three-a"):
      mainBoard.classList.toggle("is-off");
      question3.classList.toggle("q-three-a");
      currentQ = "200-c";
      document.querySelector(".text-three-a").innerText = " ";
      break;

    case x.contains("box-four-a"):
      mainBoard.classList.toggle("is-off");
      question4.classList.toggle("q-four-a");
      currentQ = "200-d";
      document.querySelector(".text-four-a").innerText = " ";
      break;

    case x.contains("box-five-a"):
      mainBoard.classList.toggle("is-off");
      question5.classList.toggle("q-five-a");
      currentQ = "200-e";
      document.querySelector(".text-five-a").innerText = " ";
      break;

    case x.contains("box-six-a"):
      mainBoard.classList.toggle("is-off");
      question6.classList.toggle("q-six-a");
      currentQ = "200-f";
      document.querySelector(".text-six-a").innerText = " ";
      break;

    case x.contains("box-one-b"):
      mainBoard.classList.toggle("is-off");
      question7.classList.toggle("q-one-b");
      currentQ = "400-a";
      document.querySelector(".text-one-b").innerText = " ";
      break;
    case x.contains("box-two-b"):
      mainBoard.classList.toggle("is-off");
      question8.classList.toggle("q-two-b");
      currentQ = "400-b";
      document.querySelector(".text-two-b").innerText = " ";
      break;
    case x.contains("box-three-b"):
      mainBoard.classList.toggle("is-off");
      question9.classList.toggle("q-three-b");
      currentQ = "400-c";
      document.querySelector(".text-three-b").innerText = " ";
      break;
    case x.contains("box-four-b"):
      mainBoard.classList.toggle("is-off");
      question10.classList.toggle("q-four-b");
      currentQ = "400-d";
      document.querySelector(".text-four-b").innerText = " ";
      break;
    case x.contains("box-five-b"):
      mainBoard.classList.toggle("is-off");
      question11.classList.toggle("q-five-b");
      currentQ = "400-e";
      document.querySelector(".text-five-b").innerText = " ";
      break;
    case x.contains("box-six-b"):
      mainBoard.classList.toggle("is-off");
      question12.classList.toggle("q-six-b");
      currentQ = "400-f";
      document.querySelector(".text-six-b").innerText = " ";
      break;
    case x.contains("box-one-c"):
      mainBoard.classList.toggle("is-off");
      question13.classList.toggle("q-one-c");
      currentQ = "600-a";
      document.querySelector(".text-one-c").innerText = " ";
      break;
    case x.contains("box-two-c"):
      mainBoard.classList.toggle("is-off");
      question14.classList.toggle("q-two-c");
      currentQ = "600-b";
      document.querySelector(".text-two-c").innerText = " ";
      break;
    case x.contains("box-three-c"):
      mainBoard.classList.toggle("is-off");
      question15.classList.toggle("q-three-c");
      currentQ = "600-c";
      document.querySelector(".text-three-c").innerText = " ";
      break;
    case x.contains("box-four-c"):
      mainBoard.classList.toggle("is-off");
      question16.classList.toggle("q-four-c");
      currentQ = "600-d";
      document.querySelector(".text-four-c").innerText = " ";
      break;
    case x.contains("box-five-c"):
      mainBoard.classList.toggle("is-off");
      question17.classList.toggle("q-five-c");
      currentQ = "600-e";
      document.querySelector(".text-five-c").innerText = " ";
      break;
    case x.contains("box-six-c"):
      mainBoard.classList.toggle("is-off");
      question18.classList.toggle("q-six-c");
      currentQ = "600-f";
      document.querySelector(".text-six-c").innerText = " ";
      break;
    case x.contains("box-one-d"):
      mainBoard.classList.toggle("is-off");
      question19.classList.toggle("q-one-d");
      currentQ = "800-a";
      document.querySelector(".text-one-d").innerText = " ";
      break;
    case x.contains("box-two-d"):
      mainBoard.classList.toggle("is-off");
      question20.classList.toggle("q-two-d");
      currentQ = "800-b";
      document.querySelector(".text-two-d").innerText = " ";
      break;
    case x.contains("box-three-d"):
      mainBoard.classList.toggle("is-off");
      question21.classList.toggle("q-three-d");
      currentQ = "800-c";
      document.querySelector(".text-three-d").innerText = " ";
      break;
    case x.contains("box-four-d"):
      mainBoard.classList.toggle("is-off");
      question22.classList.toggle("q-four-d");
      currentQ = "800-d";
      document.querySelector(".text-four-d").innerText = " ";
      break;
    case x.contains("box-five-d"):
      mainBoard.classList.toggle("is-off");
      question23.classList.toggle("q-five-d");
      currentQ = "800-e";
      document.querySelector(".text-five-d").innerText = " ";
      break;
    case x.contains("box-six-d"):
      mainBoard.classList.toggle("is-off");
      question24.classList.toggle("q-six-d");
      currentQ = "800-f";
      document.querySelector(".text-six-d").innerText = " ";
      break;
    //1000 Qs
    case x.contains("box-one-e"):
      mainBoard.classList.toggle("is-off");
      question25.classList.toggle("q-one-e");
      currentQ = "1000-a";
      document.querySelector(".text-one-e").innerText = " ";
      break;
    case x.contains("box-two-e"):
      mainBoard.classList.toggle("is-off");
      question26.classList.toggle("q-two-e");
      currentQ = "1000-b";
      document.querySelector(".text-two-e").innerText = " ";
      break;
    case x.contains("box-three-e"):
      mainBoard.classList.toggle("is-off");
      question27.classList.toggle("q-three-e");
      currentQ = "1000-c";
      document.querySelector(".text-three-e").innerText = " ";
      break;
    case x.contains("box-four-e"):
      mainBoard.classList.toggle("is-off");
      question28.classList.toggle("q-four-e");
      currentQ = "1000-d";
      document.querySelector(".text-four-e").innerText = " ";
      break;
    case x.contains("box-five-e"):
      mainBoard.classList.toggle("is-off");
      question29.classList.toggle("q-five-e");
      currentQ = "1000-e";
      document.querySelector(".text-five-e").innerText = " ";
      break;
    case x.contains("box-six-e"):
      mainBoard.classList.toggle("is-off");
      question30.classList.toggle("q-six-e");
      currentQ = "1000-f";
      document.querySelector(".text-six-e").innerText = " ";
      break;
  }

  // if (event.target.classList.contains('main-box')) {
  //     mainBoard.classList.toggle('is-off');
  //     question.classList.toggle('question');

  // }
});

questionArea.addEventListener("click", (event) => {
  let y = event.target.classList;
  switch (true) {
    case y.contains("answer-btn-one"):
      question1.classList.toggle("q-one-a");
      answer1.classList.toggle("a-one-a");
      break;

    case y.contains("answer-btn-two"):
      question2.classList.toggle("q-two-a");
      answer2.classList.toggle("a-two-a");
      break;

    case y.contains("answer-btn-three"):
      question3.classList.toggle("q-three-a");
      answer3.classList.toggle("a-three-a");
      break;

    case y.contains("answer-btn-four"):
      question4.classList.toggle("q-four-a");
      answer4.classList.toggle("a-four-a");
      break;

    case y.contains("answer-btn-five"):
      question5.classList.toggle("q-five-a");
      answer5.classList.toggle("a-five-a");
      break;

    case y.contains("answer-btn-six"):
      question6.classList.toggle("q-six-a");
      answer6.classList.toggle("a-six-a");
      break;
    case y.contains("answer-btn-one-b"):
      question7.classList.toggle("q-one-b");
      answer7.classList.toggle("a-one-b");
      break;
    case y.contains("answer-btn-two-b"):
      question8.classList.toggle("q-two-b");
      answer8.classList.toggle("a-two-b");
      break;
    case y.contains("answer-btn-three-b"):
      question9.classList.toggle("q-three-b");
      answer9.classList.toggle("a-three-b");
      break;
    case y.contains("answer-btn-four-b"):
      question10.classList.toggle("q-four-b");
      answer10.classList.toggle("a-four-b");
      break;
    case y.contains("answer-btn-five-b"):
      question11.classList.toggle("q-five-b");
      answer11.classList.toggle("a-five-b");
      break;
    case y.contains("answer-btn-six-b"):
      question12.classList.toggle("q-six-b");
      answer12.classList.toggle("a-six-b");
      break;
    case y.contains("answer-btn-one-c"):
      question13.classList.toggle("q-one-c");
      answer13.classList.toggle("a-one-c");
      break;
    case y.contains("answer-btn-two-c"):
      question14.classList.toggle("q-two-c");
      answer14.classList.toggle("a-two-c");
      break;
    case y.contains("answer-btn-three-c"):
      question15.classList.toggle("q-three-c");
      answer15.classList.toggle("a-three-c");
      break;
    case y.contains("answer-btn-four-c"):
      question16.classList.toggle("q-four-c");
      answer16.classList.toggle("a-four-c");
      break;
    case y.contains("answer-btn-five-c"):
      question17.classList.toggle("q-five-c");
      answer17.classList.toggle("a-five-c");
      break;
    case y.contains("answer-btn-six-c"):
      question18.classList.toggle("q-six-c");
      answer18.classList.toggle("a-six-c");
      break;
    case y.contains("answer-btn-one-d"):
      question19.classList.toggle("q-one-d");
      answer19.classList.toggle("a-one-d");
      break;
    case y.contains("answer-btn-two-d"):
      question20.classList.toggle("q-two-d");
      answer20.classList.toggle("a-two-d");
      break;
    case y.contains("answer-btn-three-d"):
      question21.classList.toggle("q-three-d");
      answer21.classList.toggle("a-three-d");
      break;
    case y.contains("answer-btn-four-d"):
      question22.classList.toggle("q-four-d");
      answer22.classList.toggle("a-four-d");
      break;
    case y.contains("answer-btn-five-d"):
      question23.classList.toggle("q-five-d");
      answer23.classList.toggle("a-five-d");
      break;
    case y.contains("answer-btn-six-d"):
      question24.classList.toggle("q-six-d");
      answer24.classList.toggle("a-six-d");
      break;
    case y.contains("answer-btn-one-e"):
      question25.classList.toggle("q-one-e");
      answer25.classList.toggle("a-one-e");
      break;
    case y.contains("answer-btn-two-e"):
      question26.classList.toggle("q-two-e");
      answer26.classList.toggle("a-two-e");
      break;
    case y.contains("answer-btn-three-e"):
      question27.classList.toggle("q-three-e");
      answer27.classList.toggle("a-three-e");
      break;
    case y.contains("answer-btn-four-e"):
      question28.classList.toggle("q-four-e");
      answer28.classList.toggle("a-four-e");
      break;
    case y.contains("answer-btn-five-e"):
      question29.classList.toggle("q-five-e");
      answer29.classList.toggle("a-five-e");
      break;
    case y.contains("answer-btn-six-e"):
      question30.classList.toggle("q-six-e");
      answer30.classList.toggle("a-six-e");
      break;
  }
});
answerSection.addEventListener("click", (event) => {
  switch (true) {
    case event.target.classList.contains("return"):
      mainBoard.classList.toggle("is-off");
      if (currentQ === "200-a") {
        answer1.classList.toggle("a-one-a");
      } else if (currentQ === "200-b") {
        answer2.classList.toggle("a-two-a");
      } else if (currentQ === "200-c") {
        answer3.classList.toggle("a-three-a");
      } else if (currentQ === "200-d") {
        answer4.classList.toggle("a-four-a");
      } else if (currentQ === "200-e") {
        answer5.classList.toggle("a-five-a");
      } else if (currentQ === "200-f") {
        answer6.classList.toggle("a-six-a");
      }
      //row 2 return
      else if (currentQ === "400-a") {
        answer7.classList.toggle("a-one-b");
      } else if (currentQ === "400-b") {
        answer8.classList.toggle("a-two-b");
      } else if (currentQ === "400-c") {
        answer9.classList.toggle("a-three-b");
      } else if (currentQ === "400-d") {
        answer10.classList.toggle("a-four-b");
      } else if (currentQ === "400-e") {
        answer11.classList.toggle("a-five-b");
      } else if (currentQ === "400-f") {
        answer12.classList.toggle("a-six-b");
      }
      //row 3 return
      else if (currentQ === "600-a") {
        answer13.classList.toggle("a-one-c");
      } else if (currentQ === "600-b") {
        answer14.classList.toggle("a-two-c");
      } else if (currentQ === "600-c") {
        answer15.classList.toggle("a-three-c");
      } else if (currentQ === "600-d") {
        answer16.classList.toggle("a-four-c");
      } else if (currentQ === "600-e") {
        answer17.classList.toggle("a-five-c");
      } else if (currentQ === "600-f") {
        answer18.classList.toggle("a-six-c");
      }
      //row 4 return
      else if (currentQ === "800-a") {
        answer19.classList.toggle("a-one-d");
      } else if (currentQ === "800-b") {
        answer20.classList.toggle("a-two-d");
      } else if (currentQ === "800-c") {
        answer21.classList.toggle("a-three-d");
      } else if (currentQ === "800-d") {
        answer22.classList.toggle("a-four-d");
      } else if (currentQ === "800-e") {
        answer23.classList.toggle("a-five-d");
      } else if (currentQ === "800-f") {
        answer24.classList.toggle("a-six-d");
      }
      //row 5 return
      else if (currentQ === "1000-a") {
        answer25.classList.toggle("a-one-e");
      } else if (currentQ === "1000-b") {
        answer26.classList.toggle("a-two-e");
      } else if (currentQ === "1000-c") {
        answer27.classList.toggle("a-three-e");
      } else if (currentQ === "1000-d") {
        answer28.classList.toggle("a-four-e");
      } else if (currentQ === "1000-e") {
        answer29.classList.toggle("a-five-e");
      } else if (currentQ === "1000-f") {
        answer30.classList.toggle("a-six-e");
      }
      break;

    //adding pts to team 1

    case event.target.classList.contains("team-one"):
      if (currentQ === "200-a") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer1.classList.toggle("a-one-a");
      } else if (currentQ === "200-b") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer2.classList.toggle("a-two-a");
      } else if (currentQ === "200-c") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer3.classList.toggle("a-three-a");
      } else if (currentQ === "200-d") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer4.classList.toggle("a-four-a");
      } else if (currentQ === "200-e") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer5.classList.toggle("a-five-a");
      } else if (currentQ === "200-f") {
        team1Score += 200;
        score1.innerText = team1Score;
        answer6.classList.toggle("a-six-a");
      }
      //row 2 return
      else if (currentQ === "400-a") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer7.classList.toggle("a-one-b");
      } else if (currentQ === "400-b") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer8.classList.toggle("a-two-b");
      } else if (currentQ === "400-c") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer9.classList.toggle("a-three-b");
      } else if (currentQ === "400-d") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer10.classList.toggle("a-four-b");
      } else if (currentQ === "400-e") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer11.classList.toggle("a-five-b");
      } else if (currentQ === "400-f") {
        team1Score += 400;
        score1.innerText = team1Score;
        answer12.classList.toggle("a-six-b");
      }
      //row 3 return
      else if (currentQ === "600-a") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer13.classList.toggle("a-one-c");
      } else if (currentQ === "600-b") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer14.classList.toggle("a-two-c");
      } else if (currentQ === "600-c") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer15.classList.toggle("a-three-c");
      } else if (currentQ === "600-d") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer16.classList.toggle("a-four-c");
      } else if (currentQ === "600-e") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer17.classList.toggle("a-five-c");
      } else if (currentQ === "600-f") {
        team1Score += 600;
        score1.innerText = team1Score;
        answer18.classList.toggle("a-six-c");
      }
      //row 4 return
      else if (currentQ === "800-a") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer19.classList.toggle("a-one-d");
      } else if (currentQ === "800-b") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer20.classList.toggle("a-two-d");
      } else if (currentQ === "800-c") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer21.classList.toggle("a-three-d");
      } else if (currentQ === "800-d") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer22.classList.toggle("a-four-d");
      } else if (currentQ === "800-e") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer23.classList.toggle("a-five-d");
      } else if (currentQ === "800-f") {
        team1Score += 800;
        score1.innerText = team1Score;
        answer24.classList.toggle("a-six-d");
      }
      //row 5 return
      else if (currentQ === "1000-a") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer25.classList.toggle("a-one-e");
      } else if (currentQ === "1000-b") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer26.classList.toggle("a-two-e");
      } else if (currentQ === "1000-c") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer27.classList.toggle("a-three-e");
      } else if (currentQ === "1000-d") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer28.classList.toggle("a-four-e");
      } else if (currentQ === "1000-e") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer29.classList.toggle("a-five-e");
      } else if (currentQ === "1000-f") {
        team1Score += 1000;
        score1.innerText = team1Score;
        answer30.classList.toggle("a-six-e");
      }
      mainBoard.classList.toggle("is-off");
      break;

    //adding pts for team 2 *************************************

    case event.target.classList.contains("team-two"):
      if (currentQ === "200-a") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer1.classList.toggle("a-one-a");
      } else if (currentQ === "200-b") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer2.classList.toggle("a-two-a");
      } else if (currentQ === "200-c") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer3.classList.toggle("a-three-a");
      } else if (currentQ === "200-d") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer4.classList.toggle("a-four-a");
      } else if (currentQ === "200-e") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer5.classList.toggle("a-five-a");
      } else if (currentQ === "200-f") {
        team2Score += 200;
        score2.innerText = team2Score;
        answer6.classList.toggle("a-six-a");
      }
      //row 2 return
      else if (currentQ === "400-a") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer7.classList.toggle("a-one-b");
      } else if (currentQ === "400-b") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer8.classList.toggle("a-two-b");
      } else if (currentQ === "400-c") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer9.classList.toggle("a-three-b");
      } else if (currentQ === "400-d") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer10.classList.toggle("a-four-b");
      } else if (currentQ === "400-e") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer11.classList.toggle("a-five-b");
      } else if (currentQ === "400-f") {
        team2Score += 400;
        score2.innerText = team2Score;
        answer12.classList.toggle("a-six-b");
      }
      //row 3 return
      else if (currentQ === "600-a") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer13.classList.toggle("a-one-c");
      } else if (currentQ === "600-b") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer14.classList.toggle("a-two-c");
      } else if (currentQ === "600-c") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer15.classList.toggle("a-three-c");
      } else if (currentQ === "600-d") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer16.classList.toggle("a-four-c");
      } else if (currentQ === "600-e") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer17.classList.toggle("a-five-c");
      } else if (currentQ === "600-f") {
        team2Score += 600;
        score2.innerText = team2Score;
        answer18.classList.toggle("a-six-c");
      }
      //row 4 return
      else if (currentQ === "800-a") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer19.classList.toggle("a-one-d");
      } else if (currentQ === "800-b") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer20.classList.toggle("a-two-d");
      } else if (currentQ === "800-c") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer21.classList.toggle("a-three-d");
      } else if (currentQ === "800-d") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer22.classList.toggle("a-four-d");
      } else if (currentQ === "800-e") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer23.classList.toggle("a-five-d");
      } else if (currentQ === "800-f") {
        team2Score += 800;
        score2.innerText = team2Score;
        answer24.classList.toggle("a-six-d");
      }
      //row 5 return
      else if (currentQ === "1000-a") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer25.classList.toggle("a-one-e");
      } else if (currentQ === "1000-b") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer26.classList.toggle("a-two-e");
      } else if (currentQ === "1000-c") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer27.classList.toggle("a-three-e");
      } else if (currentQ === "1000-d") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer28.classList.toggle("a-four-e");
      } else if (currentQ === "1000-e") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer29.classList.toggle("a-five-e");
      } else if (currentQ === "1000-f") {
        team2Score += 1000;
        score2.innerText = team2Score;
        answer30.classList.toggle("a-six-e");
      }
      mainBoard.classList.toggle("is-off");
      break;
    // taking pts away *****************************************************

    case event.target.classList.contains("team-two-i"):
      if (currentQ === "200-a") {
        team2Score -= 200;
        score2.innerText = team2Score;
      } else if (currentQ === "200-b") {
        team2Score -= 200;
        score2.innerText = team2Score;
        
      } else if (currentQ === "200-c") {
        team2Score -= 200;
        score2.innerText = team2Score;
       
      } else if (currentQ === "200-d") {
        team2Score -= 200;
        score2.innerText = team2Score;
        
      } else if (currentQ === "200-e") {
        team2Score -= 200;
        score2.innerText = team2Score;
        
      } else if (currentQ === "200-f") {
        team2Score -= 200;
        score2.innerText = team2Score;
       
      }
      //row 2 return
      else if (currentQ === "400-a") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      } else if (currentQ === "400-b") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      } else if (currentQ === "400-c") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      } else if (currentQ === "400-d") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      } else if (currentQ === "400-e") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      } else if (currentQ === "400-f") {
        team2Score -= 400;
        score2.innerText = team2Score;
        
      }
      //row 3 return
      else if (currentQ === "600-a") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      } else if (currentQ === "600-b") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      } else if (currentQ === "600-c") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      } else if (currentQ === "600-d") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      } else if (currentQ === "600-e") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      } else if (currentQ === "600-f") {
        team2Score -= 600;
        score2.innerText = team2Score;
        
      }
      //row 4 return
      else if (currentQ === "800-a") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      } else if (currentQ === "800-b") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      } else if (currentQ === "800-c") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      } else if (currentQ === "800-d") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      } else if (currentQ === "800-e") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      } else if (currentQ === "800-f") {
        team2Score -= 800;
        score2.innerText = team2Score;
        
      }
      //row 5 return
      else if (currentQ === "1000-a") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      } else if (currentQ === "1000-b") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      } else if (currentQ === "1000-c") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      } else if (currentQ === "1000-d") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      } else if (currentQ === "1000-e") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      } else if (currentQ === "1000-f") {
        team2Score -= 1000;
        score2.innerText = team2Score;
        
      }
      break;
      // Taking pts from 1 ************
    case event.target.classList.contains("team-one-i"):
        if (currentQ === "200-a") {
        team1Score -= 200;
        score1.innerText = team1Score;
      } else if (currentQ === "200-b") {
        team1Score -= 200;
        score1.innerText = team1Score;
        
      } else if (currentQ === "200-c") {
        team1Score -= 200;
        score1.innerText = team1Score;
       
      } else if (currentQ === "200-d") {
        team1Score -= 200;
        score1.innerText = team1Score;
        
      } else if (currentQ === "200-e") {
        team1Score -= 200;
        score1.innerText = team1Score;
        
      } else if (currentQ === "200-f") {
        team1Score -= 200;
        score1.innerText = team1Score;
       
      }
      //row 2 return
      else if (currentQ === "400-a") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      } else if (currentQ === "400-b") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      } else if (currentQ === "400-c") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      } else if (currentQ === "400-d") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      } else if (currentQ === "400-e") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      } else if (currentQ === "400-f") {
        team1Score -= 400;
        score1.innerText = team1Score;
        
      }
      //row 3 return
      else if (currentQ === "600-a") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      } else if (currentQ === "600-b") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      } else if (currentQ === "600-c") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      } else if (currentQ === "600-d") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      } else if (currentQ === "600-e") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      } else if (currentQ === "600-f") {
        team1Score -= 600;
        score1.innerText = team1Score;
        
      }
      //row 4 return
      else if (currentQ === "800-a") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      } else if (currentQ === "800-b") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      } else if (currentQ === "800-c") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      } else if (currentQ === "800-d") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      } else if (currentQ === "800-e") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      } else if (currentQ === "800-f") {
        team1Score -= 800;
        score1.innerText = team1Score;
        
      }
      //row 5 return
      else if (currentQ === "1000-a") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      } else if (currentQ === "1000-b") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      } else if (currentQ === "1000-c") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      } else if (currentQ === "1000-d") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      } else if (currentQ === "1000-e") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      } else if (currentQ === "1000-f") {
        team1Score -= 1000;
        score1.innerText = team1Score;
        
      }

  }
});
