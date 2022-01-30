const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
//added user guess to push from outside and play game
  userGuess: [],
//add a prevGuesses property to the game initialized to an empty array
//From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//- Hint: this is an excellent use for a while loop (or even a do...while loop!)

  //add a getGuess method that returns a number betwen smallestNum and biggestNum: while loop works if nothing is in prevGuesses
  getGuess: function(){
    while (((this.prevGuesses[this.prevGuesses.length-1]) !== this.secretNum)) {
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    } 
    this.userGuess = parseInt(this.userGuess,10)
    this.prevGuesses.push(this.userGuess)
    //parseInt is taking user guess and making it a number, then pushing to prevGuesses 
    // ***why is it not pushing userGuess to prevGuess**
  }, 
  play: function() {
    while (this.secretNum = [])  {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum
    }

  //problem here is i lose the secret num if i push to prevGuesses
  },


//add a render method play will call after a guess is made - render cannot access play's local variables so pass render args as needed
  render: function(){
    while (this.prevGuesses !== this.secretNum) {
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
      return `Congrats! You guessed the number in ${this.prevGuesses.length-1} tries!`
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      return `Your guess is too high. Previous guesses ${this.prevGuesses.join(' ')}`
    } else {
      return `Your guess is too low. Previous guesses ${this.prevGuesses.join(' ')}`
    } }
  }
}
game.userGuess.push(13)
game.userGuess.push(23)
console.log(game.userGuess)

console.log(game.play())
console.log(game.getGuess())
console.log(game.prevGuesses)
console.log(game.render())



