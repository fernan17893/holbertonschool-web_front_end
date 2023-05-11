#!/usr/bin/env python3

import time

t = input("Enter a time in seconds: ")
t = int(t)

for i in range(t, 0, -1):
    seconds = i % 60
    minutes = int(i / 60) % 60
    hours = int(i / 3600) % 24
    print(f"{hours:02d}:{minutes:02d}:{seconds:02d}")
    time.sleep(1)

print("Time is up!")
