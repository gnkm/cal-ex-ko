class @ProblemModel
  constructor: (@firstArg, @secondArg) ->
    @correctAnswer = @firstArg * @secondArg
    @userAnswer = ko.observable ''
    @correct = ko.computed () =>
      @correctAnswer is Number(@userAnswer())
