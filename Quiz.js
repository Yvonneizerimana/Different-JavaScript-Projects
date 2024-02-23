const readline = require('readline');

// Function to create a readline interface
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
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

  // Function to display a quiz question along with multiple-choice answers
  displayQuestion: function(questionObj, rl) {
    // Display the question
    console.log(questionObj.question);

    // Display multiple-choice options
    questionObj.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    // Get user input
    rl.question("Enter your answer (1, 2, 3, or 4):", (userAnswer) => {
      const parsedAnswer = parseInt(userAnswer);

      // Check answer
      if (!isNaN(parsedAnswer) && parsedAnswer >= 1 && parsedAnswer <= 4) {
        if (parsedAnswer - 1 === questionObj.correctAnswer) {
          console.log("Correct!");
          this.score++;
        } else {
          console.log("Incorrect!");
        }
        this.displayNextQuestion(rl);
      } else {
        console.log("Invalid input. Please enter a valid answer (1, 2, 3, or 4).");
        this.displayQuestion(questionObj, rl);
      }
    });
  },

  // Function to display the next question
  displayNextQuestion: function(rl) {
    if (this.questions.length > 0) {
      const questionObj = this.questions.shift();
      this.displayQuestion(questionObj, rl);
    } else {
      rl.close();
      console.log(`Quiz ended! Your final score is: ${this.score}/${this.questions.length}`);
    }
  },

  // Function to start the quiz
  startQuiz: function() {
    console.log("Welcome to the Online Quiz Game!");
    console.log("Answer the following questions:");

    const rl = createInterface();
    this.displayNextQuestion(rl);
  }
};

// Start the quiz
Quiz.startQuiz();
