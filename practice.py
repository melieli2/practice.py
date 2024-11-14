import random

num_to_guess = random.randint(10, 80)
guess = None

while guess != num_to_guess:
    guess = int(input("Gjej nr midis 10 dhe 100: "))
    if guess < num_to_guess:
        print("Shume i ulet !")
    elif guess > num_to_guess:
        print("Shume i larte!")
    else:
        print("E sakte! E gjete.")