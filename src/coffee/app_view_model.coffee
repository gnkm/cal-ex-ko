class @AppViewModel
  constructor: () ->
    @problemNumbers = [5, 10, 15, 20]

    @difficulty = [
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

    @problems = @generateProblems @problemNumbers[0], @difficulty[0]

    @answered = ko.observable false

  generateProblems: (problemNumber, rank) =>
    problems = []
    for i in [1..problemNumber]
      fstArg = @generateRandom rank.argMin, rank.argMax
      scdArg = @generateRandom rank.argMin, rank.argMax
      problems.push(new ProblemModel fstArg, scdArg)
    return problems

  generateRandom: (min, max) =>
    Math.floor(Math.random() * max) + min

  answer: () =>
    @answered true
