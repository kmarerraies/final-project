let currentQuestion = 0;
        let score = 0;
        let timer;
        const questions = [
            {
                question: "which job AI can't take over ?",
                options: ["artist", "pharmasist", "Telemarketer"],
                correctAnswer: "artist"
            },
            {
                question: "Which of the following statements is true about AI in the workplace?",
                options: ["AI can replace all human workers in any job.", "AI can fully understand human emotions.", "AI can enhance human productivity and decision-making."],
                correctAnswer: "AI can enhance human productivity and decision-making."
            },
            {
                question: "What AI application helps customer service representatives by offering quick responses to common queries?",
                options: ["Speech recognition", "Virtual reality", "Chatbots"],
                correctAnswer: "Chatbots"
            },
            {
                question: "What is the concept of AI ethics in the context of the future of work?",
                options: ["The study of AI's impact on job markets", "Ensuring that AI systems operate in an ethical and responsible manner", " The use of AI in the legal profession"],
                correctAnswer: "Ensuring that AI systems operate in an ethical and responsible manner"
            }
        ];

        function startQuiz() {
            currentQuestion = 0;
            score = 0;
            displayQuestion();
            startTimer();
            document.getElementById('startButton').style.display = 'none';
            document.getElementById('submitButton').style.display = 'inline-block';
        }

        function displayQuestion() {
            if (currentQuestion < questions.length) {
                const question = questions[currentQuestion];
                document.getElementById('question1').textContent = `${currentQuestion + 1}. ${question.question}`;
                const options = document.getElementById('options1');
                options.innerHTML = "";
                question.options.forEach((option, index) => {
                    const li = document.createElement('li');
                    const button = document.createElement('button');
                    button.textContent = `(${String.fromCharCode(97 + index)}) ${option}`;
                    button.onclick = () => selectAnswer(option);
                    li.appendChild(button);
                    options.appendChild(li);
                });
            } else {
                endQuiz();
            }
        }

        function selectAnswer(userAnswer) {
            const question = questions[currentQuestion];
            if (userAnswer === question.correctAnswer) {
                score++;
            }
            currentQuestion++;
            displayQuestion();
        }

        function startTimer() {
            let timeLeft = 60;
            updateTimer(timeLeft);
            timer = setInterval(() => {
                timeLeft--;
                updateTimer(timeLeft);
                if (timeLeft === 0) {
                    clearInterval(timer);
                    endQuiz();
                }
            }, 1000);
        }

        function updateTimer(timeLeft) {
            document.getElementById('timer').textContent = `Time Left: ${timeLeft} seconds`;
        }

        function submitQuiz() {
            clearInterval(timer);
            endQuiz();
        }

        function endQuiz() {
            document.getElementById('score').textContent = `Your Score: ${score}/${questions.length}`;
            document.getElementById('submitButton').style.display = 'none';
        }