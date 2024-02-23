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
    displayQuestion: function() {
        // Get a random question
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        const questionObj = this.questions[randomIndex];
        
        // Display the question
        console.log(questionObj.question);

        // Display multiple-choice options
        questionObj.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        // Prompt user for input and check answer
        const userAnswer = parseInt(prompt("Enter your answer (1, 2, 3, or 4):"));
        if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= 4) {
            if (userAnswer - 1 === questionObj.correctAnswer) {
                console.log("Correct!");
                this.score++;
            } else {
                console.log("Incorrect!");
            }
        } else {
            console.log("Invalid input. Please enter a number between 1 and 4.");
        }
    },

    // Function to start the quiz
    startQuiz: function() {
        console.log("Welcome to the Quiz Game!");
        console.log("Answer the following questions:");

        // Display questions one by one
        for (const question of this.questions) {
            this.displayQuestion();
        }

        // Display final score
        console.log(`Quiz ended! Your final score is: ${this.score}/${this.questions.length}`);
    }
};

// Start the quiz
Quiz.startQuiz();