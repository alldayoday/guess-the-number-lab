const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: [],
  prevGuesses: [96,99,52,4],
  play: function() {
    do {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum
    }
    while (this.prevGuesses.length === 0);
  },

  getGuess: function(){
    while (this.prevGuesses.length === 0) {
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    } 
    this.prevGuesses.push()

  }, 
  render: function(){
    while ((this.prevGuesses[this.prevGuesses.length-1]) !== this.secretNum) {
    if (this.prevGuesses[this.prevGuesses.length] === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length-1} tries!`
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses}`
    } }
  }
}

console.log(game.prevGuesses.length)

console.log(game.play())

console.log(game.render())

console.log(game.getGuess())

console.log(game.prevGuesses)


//added note
//added another
