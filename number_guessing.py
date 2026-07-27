import random

hidden_number = random.randint(1, 15)

trials = 0

print("Welcome to the Number guessing Game!!!")
print("I am thinking of a number between 1 and 15.")

while True:
    guess = input("Enter your guess: ")

    guess = int(guess)
    trials += 1

    if guess < hidden_number:
        print("That's too low")
    elif guess > hidden_number:
        print("That's too high")
    else:
        print("You're correct, well done you guessed the number!!!")
        print("Total trials:", trials)
        break
