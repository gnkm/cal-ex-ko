class @AppViewModel
  constructor: () ->
    @problemNumbers = [5, 10, 15, 20]
    @problemNumber = @problemNumbers[0]

    @difficulties = [
      {
        argMax: 9
        argMin: 1
        display: '1 の段から 9 の段'
      }
      {
        argMax: 19
        argMin: 11
        display: '11 の段から 19 の段'
      }
    ]
    @difficulty = @difficulties[0]

    @problems = ko.observable(@generateProblems @problemNumber, @difficulty)

    @answered = ko.observable false

  generateProblems: (problemNumber, difficulty) =>
    problems = []
    for i in [1..problemNumber]
      fstArg = @generateRandom difficulty.argMin, difficulty.argMax
      scdArg = @generateRandom difficulty.argMin, difficulty.argMax
      problems.push(new ProblemModel fstArg, scdArg)
    return problems

  generateRandom: (min, max) =>
    Math.floor(Math.random() * max) + min

  answer: () =>
    @answered true

  changeProblemNumbers: (problemNumber) =>
    @problemNumber = problemNumber
    @problems(@generateProblems @problemNumber, @difficulty)
