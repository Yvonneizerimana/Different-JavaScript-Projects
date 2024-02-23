// Function to get user input
function getUserInput(promptMessage, validAnswers) {
    let userInput;
    do {
      userInput = parseInt(prompt(promptMessage));
    } while (isNaN(userInput) || !validAnswers.includes(userInput));
  
    return userInput;
  }
  
  // Define the Quiz object
  const Quiz = {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: 0
      }
    ],
    score: 0,
  
    // Function to display a random quiz question along with multiple-choice answers
    displayQuestion: function(questionObj) {
      // Display the question
      console.log(questionObj.question);
  
      // Display multiple-choice options
      questionObj.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      });
  
      // Get user input
      const userAnswer = getUserInput("Enter your answer (1, 2, 3, or 4):", [1, 2, 3, 4]);
  
      // Check answer
      if (userAnswer === questionObj.correctAnswer) {
        console.log("Correct!");
        this.score++;
      } else {
        console.log("Incorrect!");
      }
    },
  
    // Function to start the quiz
    startQuiz: function() {
      console.log("Welcome to the Online Quiz Game!");
      console.log("Answer the following questions:");
  
      // Display questions one by one
      for (const question of this.questions) {
        this.displayQuestion(question);
      }
  
      // Display final score
      console.log(`Quiz ended! Your final score is: ${this.score}/${this.questions.length}`);
    }
  };
  
  // Start the quiz
  Quiz.startQuiz();