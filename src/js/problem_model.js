(function() {
  this.ProblemModel = (function() {
    function ProblemModel(firstArg, secondArg) {
      this.firstArg = firstArg;
      this.secondArg = secondArg;
      this.correctAnswer = this.firstArg * this.secondArg;
      this.userAnswer = ko.observable('');
      this.correct = ko.computed((function(_this) {
        return function() {
          return _this.correctAnswer === Number(_this.userAnswer());
        };
      })(this));
    }

    return ProblemModel;

  })();

}).call(this);
