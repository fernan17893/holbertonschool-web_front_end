#!/usr/bin/python3
"""add 2 tuples"""

tup_1 = (10, 4)
tup_2 = (2, 5)

print("Tuple 1 is:" + str(tup_1))
print("Tuple 2 is:" + str(tup_2))

res= []
for i in range(0,len(tup_1)):
    tup3 = tup_1[i]+tup_2[i]
    res.append(tup3)
res=tuple(res)
print("Result is : " + str(res))