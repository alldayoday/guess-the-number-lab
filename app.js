const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
//add a prevGuesses property to the game initialized to an empty array
play: function() {
  this.secretNum = Math.floor(Math.random() * 
  (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  console.log(this.secretNum)
  do {
    this.prevGuesses.push(this.getGuess())
    this.render()
  } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum)

},

//From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//- Hint: this is an excellent use for a while loop (or even a do...while loop!)

  //add a getGuess method that returns a number betwen smallestNum and biggestNum: while loop works if nothing is in prevGuesses
  getGuess: function(){
    let guess
    do {
    guess = parseInt(
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`, guess)
    )
  } 
  while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)

  return guess

    //parseInt is taking user guess and making it a number, then pushing to prevGuesses 
  }, 
//add a render method play will call after a guess is made - render cannot access play's local variables so pass render args as needed
  render: function(){
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
      alert( `Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      alert( `Your guess is too high. Previous guesses ${this.prevGuesses.join(' ')}`)
    } else {
      alert(`Your guess is too low. Previous guesses ${this.prevGuesses.join(' ')}`)
    } 
  }
}

game.play()