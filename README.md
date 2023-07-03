# ToP-RPS
The Odin Project - Rock Paper Scissors

The assignment here was to make a console based RPS game, I decided to tweak with it a bit more and make it into a small interactable HTML game.
Writing the code at first everything went smooth but for some reason I couldn't get the game to run properly.

Tried debugging using the console.log() command, I recieved the values I expected
The issue was inside JavaScript code, I was taking in playerOption variable value in lowercase letters, if loop didn't recognize the variable value due to the first letter and didn't work nor did it give an error message.