const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function(){
    while (this.prevGuesses = 0)
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}


console.log(game.getGuess())