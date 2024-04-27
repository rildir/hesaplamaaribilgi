document
  .getElementById('examForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    var totalQuestions = 50
    var correctAnswersInput = document.getElementById('correctAnswers')
    var correctAnswers = parseInt(correctAnswersInput.value)

    if (correctAnswers > 50) {
      correctAnswers = 50;
      correctAnswersInput.value = 50;
    }

    var correctAnswerScore = 2
    var score = correctAnswers * correctAnswerScore

    var successMessage =
      correctAnswers >= 35
        ? "Ehliyet sınavından başarıyla <span style='color: green; font-weight: bold'>geçtiniz</span>."
        : "Ehliyet sınavını <span style='color: red; font-weight: bold'>geçemediniz</span>."

    var resultMessage =
      '<p>' + successMessage + '</p>' + '<p>Puanınız: ' + score + '</p>'

    document.getElementById('resultSinavBody').innerHTML = resultMessage
    $('#resultModal').modal('show')
  })
