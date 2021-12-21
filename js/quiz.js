// Questions are defined here
var myQuestions = [
    {
        question: "Кто был басистом в Metallica в период альбомов Load/Reload?",
        answers: {
            a: 'Клифф Бертон',
            b: 'Джейсон Ньюстед',
            c: 'Роберт Трухильо'
        },
        correctAnswer: 'b'
    },
    {
        question: "Кто основал группу Megadeth?",
        answers: {
            a: 'Дейв Мастейн',
            b: 'Марти Фридман',
            c: 'Кико Лорейро'
        },
        correctAnswer: 'a'
    },
	{
        question: "Какой из альбомов Avenged Sevenfold третий по счету?",
        answers: {
            a: 'Waking the Fallen',
            b: 'Sounding the Seventh Trumpet',
            c: 'City of Evil'
        },
        correctAnswer: 'c'
    },
    {
        question: "Какой из этих треков не написан группой Iron Maiden?",
        answers: {
            a: 'Run to the Hills',
            b: 'Shepherd of Fire',
            c: 'Fear of the Dark'
        },
        correctAnswer: 'b'
    },
	{
        question: "В каком альбоме группы Black Sabbath есть трек Black Sabbath?",
        answers: {
            a: 'Black Sabbath',
            b: 'Paranoid',
            c: 'Sabotage'
        },
        correctAnswer: 'a'
    },
    {
        question: "Действия какой из этих песен Sabaton произошли в Первой Мировой Войне?",
        answers: {
            a: 'Attack of the Dead Men',
            b: 'Primo Victoria',
            c: 'Ghost Division'
        },
        correctAnswer: 'a'
    },
	{
        question: "Кто из этих музыкантов НЕ писал музыку к Hotline Miami?",
        answers: {
            a: 'Carpenter Brut',
            b: 'Perturbator',
            c: 'Mick Gordon'
        },
        correctAnswer: 'c'
    },
    {
        question: "Кем работал Фрэнк Клепаки до записи саундтреков к играм?",
        answers: {
            a: 'Программистом',
            b: 'Бета-тестером',
            c: 'Художником'
        },
        correctAnswer: 'b'
    },
	{
        question: "Для какой серии игр Мик Гордон не писал саундтрек?",
        answers: {
            a: 'Doom',
            b: 'Wolfenstein',
            c: 'Command & Conquer'
        },
        correctAnswer: 'c'
    },
    {
        question: "Какой из треков Metallica самый длинный?",
        answers: {
            a: 'All Nightmare Long',
            b: 'Suicide & Redemption',
            c: 'Frayed Ends of Sanity'
        },
        correctAnswer: 'b'
    }
];

// Linking element IDs to vars
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// Running the code
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// Outer function that generates the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    // Inner function that generates the HTML code for question and answers display
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        // Generating code for every question
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            // Adding a radio button for every answer
            for (var letter in questions[i].answers) {
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            // Pushing generated code to output list
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // Combining the output lists and putting it into HTML
        quizContainer.innerHTML = output.join('');
    }

    // Inner function that parses the answers and marks right/wrong ones
    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

        // Answer parsing
        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'seagreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // Showing questions right away
    showQuestions(questions, quizContainer);

    // Showing results on submit
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}