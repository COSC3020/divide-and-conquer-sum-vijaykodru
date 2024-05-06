[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

When it comes to the base cases where the function checks if the array has 0 or 1 element, I think that the runtime will always be a 1, a constant due to the number of steps involved being the same. And when it comes to array having more than 1 element i.e, n > 1 T(n) = 3T(n/3). In this the n/3 indicates the array being divided into 3 equal parts, the 3 in the front represents the number of times the function is called. Because the constants can be neglected asymptotically the recurrence relation is as follows:

T(n) = 1 when n <= 1
T(n) = 3T(n/3) when n > 1


Solving for T(n/3) by substituting n/3 in T(n)

T(n/3) = 3T(n/9)
T(n) = 3(3T(n/9))
T(n) = 9T(n/9)

The above continues until we acheive

T(n) = $3^{i}$ T( $\frac{n}{3^i}$ )

let i = $\log_{3}n$

T(n) = $3^(lg_{3}n)$ T ($n/3^(lg_{3}n)$) 

Applying log functions we know $3^(lg_{3}n)$ = n 

T(n) = nT(1)

we know T(1) = 1

This implies that T(n) = n for the above recurrence relation.


Therefore the runtime of my algorithm is $\Theta$(n)

Reference: divide-and-conquer-sum-swilso59-1