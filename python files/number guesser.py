import random

print("Hello World!")
print("What is your name?")
name = input()
print("Hello " + name + ".")

secret = random.randint(1,100)
gameWon = False
guessesLeft = 6

print()
print("I am thinking of a number between 1 and 100")

while True:
    print("You have " + str(guessesLeft) + " guesses left")
    guess = int(input("Take a guess: "))

    guessesLeft = guessesLeft - 1

    if guess == secret:
        gameWon = True
        break
    elif guess > secret:
        print("Too big")
    elif guess < secret:
        print("Too small")

    if guessesLeft < 1:
        break

if gameWon == True:
    print("You Win!")
else:
    print("You lose.")
    print("The number was " + secret + ".")



