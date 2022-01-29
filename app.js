const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  myGuess: [1,3],
  getGuess: function(){
    while (this.prevGuesses.length = null) {
    console.log( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
  } 
  this.prevGuesses.push(myGuess)
}, 
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  render: function(){
    while (this.prevGuesses = [this.prevGuesses.length -1] !== this.secretNum)
    if (this.guess === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length}!`
    } else if (this.guess > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses}`
    }
  }
}

//figure out where guesses come from
//
