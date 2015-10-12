(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.AppViewModel = (function() {
    function AppViewModel() {
      this.changeDifficulty = bind(this.changeDifficulty, this);
      this.changeProblemNumbers = bind(this.changeProblemNumbers, this);
      this.answer = bind(this.answer, this);
      this.generateRandom = bind(this.generateRandom, this);
      this.generateProblems = bind(this.generateProblems, this);
      this.problemNumbers = [5, 10, 15, 20];
      this.problemNumber = this.problemNumbers[0];
      this.difficulties = [
        {
          argMax: 9,
          argMin: 1,
          display: '1 の段から 9 の段'
        }, {
          argMax: 19,
          argMin: 11,
          display: '11 の段から 19 の段'
        }
      ];
      this.difficulty = this.difficulties[0];
      this.problems = ko.observable(this.generateProblems(this.problemNumber, this.difficulty));
      this.answered = ko.observable(false);
    }

    AppViewModel.prototype.generateProblems = function(problemNumber, difficulty) {
      var fstArg, i, j, problems, ref, scdArg;
      problems = [];
      for (i = j = 1, ref = problemNumber; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        fstArg = this.generateRandom(difficulty.argMin, difficulty.argMax);
        scdArg = this.generateRandom(difficulty.argMin, difficulty.argMax);
        problems.push(new ProblemModel(fstArg, scdArg));
      }
      return problems;
    };

    AppViewModel.prototype.generateRandom = function(min, max) {
      return Math.floor(Math.random() * max) + min;
    };

    AppViewModel.prototype.answer = function() {
      return this.answered(true);
    };

    AppViewModel.prototype.changeProblemNumbers = function(problemNumber) {
      this.problemNumber = problemNumber;
      return this.problems(this.generateProblems(this.problemNumber, this.difficulty));
    };

    AppViewModel.prototype.changeDifficulty = function(difficulty) {
      this.difficulty = difficulty;
      return this.problems(this.generateProblems(this.problemNumber, this.difficulty));
    };

    return AppViewModel;

  })();

}).call(this);
