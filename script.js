
const quiz = {
  question: "어느 지역의 특산물일까요? 🍎 사과",
  choices: ["제주", "경북", "강원"],
  answer: "경북"
};

document.getElementById("question").innerText = quiz.question;

const choicesDiv = document.getElementById("choices");
quiz.choices.forEach(choice => {
  const btn = document.createElement("button");
  btn.innerText = choice;
  btn.onclick = () => {
    const feedback = choice === quiz.answer ? "정답입니다!" : "아쉬워요!";
    document.getElementById("feedback").innerText = feedback;
  };
  choicesDiv.appendChild(btn);
});
