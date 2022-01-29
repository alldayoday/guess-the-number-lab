const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: [],
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    return this.secretNum
  },
  getGuess: function(){
    while (this.prevGuesses.length === 0) {
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    } 
  }, 
  render: function(){
    while ((this.prevGuesses[this.prevGuesses.length -1]) !== this.secretNum)
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length} tries!`
    } else if (this.guess > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses}`
    }
  }
}

console.log(game.prevGuesses.length)

console.log(game.play())

console.log(game.render())

console.log(game.getGuess())


//added note
//added another
