#!/usr/bin/python3
"""bsic fab file"""

from cProfile import run
import fabfile
from fabric import operations

def hello(who):
    print("Hello {who}!".format(who=who))

def dir():
    run("mkdir /REALREPO/test/")