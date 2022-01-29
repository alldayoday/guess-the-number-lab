const game = {
  title: 'Guess the Number!',
  guess: 1,
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [''],
  getGuess: function(){
    while (this.prevGuesses = ['']) {
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    } 
  }, 
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  render: function(){
    if (this.guess === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length}!`
    } else if (this.guess > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses}`
    }
  }
}


console.log(game.play())