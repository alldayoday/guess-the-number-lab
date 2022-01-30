const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: [],
  prevGuesses: [],
//add a prevGuesses property to the game initialized to an empty array
//From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//- Hint: this is an excellent use for a while loop (or even a do...while loop!)

  //add a getGuess method that returns a number betwen smallestNum and biggestNum: while loop works if nothing is in prevGuesses
  getGuess: function(){
    while (((this.prevGuesses[this.prevGuesses.length-1]) !== this.secretNum)) {
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    } 
    this.prevGuesses = parseInt(this.prevGuesses,10)
    //parseInt is taking user guess and making it a number, then pushing to prevGuesses 
    // ***why is it not pushing userGuess to prevGuess**
  }, 
  play: function() {
    while (this.prevGuesses.length === 0)  {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum
    }
    return this.getGuess()
  },
//add a render method play will call after a guess is made - render cannot access play's local variables so pass render args as needed
  render: function(){
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length} tries!`
    } if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses.join(' ')}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses.join(' ')}`
    } }
}



console.log(game.play())
console.log(game.getGuess())

game.prevGuesses.push(1)



console.log(game.render())



