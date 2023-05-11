#!/usr/bin/env python3

questions = ("What is the capital of France?:",
              "What is the capital of Germany?:",
                "What is the capital of Italy?:",
                "What is the capital of Spain?:")


options = (("A: Paris","B: London","C: Rome","D: Madrid"),
           ("A: Berlin","B: Paris","C: Rome","D: Madrid"),
           ("A: Rome","B: London","C: Paris","D: Madrid"),
           ("A: Madrid","B: London","C: Rome","D: Paris"))

answers = ("A", "A", "A", "A")
guesses = []
score = 0
question_number = 0

for question in questions:
    print("-------------------------")
    print(question)
    for option in options[question_number]:
        print(option)

    guess = input("Your answer: ").upper()
    guesses.append(guess)
    if guess == answers[question_number]:
        score += 1
        print("Correct!")
    else:
        print("Incorrect!")
        print(f"The correct answer is {answers[question_number]}")
question_number += 1

print("-------------------------")
print("Quiz complete!")
print(f"Your score is {score} out of {len(questions)}")