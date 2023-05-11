#!/usr/bin/python3
"""print a dic with ordered keys"""
from pprint import pprint

my_dic = { 'language': "C", 'Number': "89", 'track': "Low Level", 'ids': [1,3,3] }
"""pprint(my_dic)"""

for key, value in sorted(my_dic.items()):
    print("{} : {}".format(key, value))