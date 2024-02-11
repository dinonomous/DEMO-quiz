document.addEventListener("DOMContentLoaded", function () {
  let question = document.querySelector(".question");
  let options = document.querySelectorAll(".options");
  // let next = document.querySelector("#next");
  // let back = document.querySelector("#back");
  let currentquestionindex = 0;
  let x = document.querySelector("#next");

  // Timer
  let initlatime = 10;
  const countdown = setInterval(() => {
    const minutes = Math.floor(initlatime / 60);
    const seconds = initlatime % 60;

    document.querySelector(".timer").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    initlatime--;

    if (initlatime < 0) {
      clearInterval(countdown);
      document.querySelector(".timer").innerHTML = "Times up";
    }
  }, 1000);

  // Questions
  const questions0fthequiz = [
    "What was that first Pokémon that Ash caught?",
    "Slugma is what type of Pokemon?", "Which Pokémon can use its black ink to draw pictures or issue warnings?", "Squirtle can eventually become which Pokémon?",
    "Which Pokémon seems to always have a headache?",
    " Which Pokémon's English name sounds like a creature from the Indian Ocean?",
    "Which Pokémon can be used to beat Lorelei?",
    "Rock tunnel and power plant are closest to which of the following?",
    "What is Professor Oak's Japanese name?",
    "Who stole Misty's bike?",
    "Which of the following are Pok�mon games?"
  ];
  question.innerHTML = questions0fthequiz[currentquestionindex];

  // Options for the current question
  const abcdOptions = [
    ["Fire", "Water", "Grass", "Dragon"], // Options for the first question
    ["Rock", "Fire", "Water", "Electric"], // Options for the second question
    ["Horsea", "Starmie", "Bellsprout", "Blastoise"],
    ["Electabuzz", "Blastoise", "Magmar", "Bulbasaur"],
    ["Psyduck", "Kangaskhan", "Zapdos", "Golduck"],
    ["Gengar", "Rhydon", "Dewgong", "Poliwrath"],
    ["Ice or water", "Psychic or ghost", "Grass or electric"],
    ["Celadon City", "Cerulean City", "Cinnabar Island"],
    ["Okita", "Okido", "Arigato"],
    ["Ash", "Gary", "Jessie"],
    ["Gold and silver", "Orange and pewter", "White and purple"]
  ];

  
  options.forEach(options =>{
    options.addEventListener('click', function(){
      currentquestionindex++ ;
      if (currentquestionindex >= 0 && currentquestionindex <= questions0fthequiz.length) {
        console.log("hi there");
        
        updatingoptions();
      }
      else {
        question.innerHTML = "quiz end";
        clearInterval(countdown);
      }
  
    });
  })
  
  
  
  
  function updatingoptions() {
    options.forEach((numbering, index) => {
      numbering.innerHTML = abcdOptions[currentquestionindex][index];
        console.log("im updating the options")
      });
    };
    
    updatingoptions();
    
});