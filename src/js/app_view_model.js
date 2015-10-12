(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.AppViewModel = (function() {
    function AppViewModel() {
      this.answer = bind(this.answer, this);
      this.generateRandom = bind(this.generateRandom, this);
      this.generateProblems = bind(this.generateProblems, this);
      this.problemNumbers = [5, 10, 15, 20];
      this.ranks = [
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
      this.problems = this.generateProblems(this.problemNumbers[0], this.ranks[0]);
      this.answered = ko.observable(false);
    }

    AppViewModel.prototype.generateProblems = function(problemNumber, rank) {
      var fstArg, i, j, problems, ref, scdArg;
      problems = [];
      for (i = j = 1, ref = problemNumber; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        fstArg = this.generateRandom(rank.argMin, rank.argMax);
        scdArg = this.generateRandom(rank.argMin, rank.argMax);
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

    return AppViewModel;

  })();

}).call(this);
