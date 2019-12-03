# Inputs are a n x 3 array where each item represents a person, and each item represent something on their list

import numpy as np
import math
from textsimi import get_sim


def stripword(word):
    return word.lower()


def main(interests):
    n = len(interests)
    simMtrx = np.zeros([n, n])
    words = []
    for i in range(len(interests)):
        for j in range(3):
            item = stripword(interests[i][j])
            for idx, val in enumerate(words):
                if val == item or val == item[:-1] or val == item+"s":
                    interests[i][j] = idx
                    break
            # if interests[i][j]
            # THIS IS BROKEN, FIX TOMORROW
            words.append(item)
            interests[i][j] = len(words)-1
    wordmap = {}
    for idx, val in enumerate(words):
        wordmap[idx] = val
    m = len(words)
    wordSimMtrx = np.zeros([m, m])
    print(interests)
    for i in range(m):
        for j in range(i, m):
            print(i, j)
            sim = math.floor(100*get_sim(words[i], words[j]))
            wordSimMtrx[i][j] = sim
            wordSimMtrx[j][i] = sim

    def calcsim(u1list, u2list):
        sim = []
        for i1 in u1list:
            for i2 in u2list:
                sim.append(wordSimMtrx[wordmap[i1]][wordmap[i2]])
        sort(sim)
        return 0.5*sim[0]+(0.5**2)*sim[1]+(0.5**3)*sim[2]+(0.5**4)*sim[3]
     # print(wordSimMtrx)
    for i in range(n):
        for j in range(i, n):
            result = calcsim(interests[i], interests[j])
            simMtrx[i][j] = result
            simMtrx[j][i] = result
    print(simMtrx)


main([["reading", "board games", "food"], ["class supplies", "Food", "Books"], ["book", "video games", "coffee"], [
     "music", "piano", "software"], ["Reading", "Music", "Dancing"], ["Sports", "Fasion", "food"], ["Parties", "Movies", "Art", ]])
