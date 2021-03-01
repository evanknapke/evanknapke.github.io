---
layout: page
title: Signing Free Agents
permalink: /projects/signing_free_agents/
---

# Signing Free Agents
---

[Check out the source code](https://github.com/evanknapke/Signing-Free-Agents)

## Description

Takes in a list of free agent baseball players and returns the best possible players to sign to the team in order to maximize the VORP (value over replacement player) for that team. The problem is a variation of the classic Knapsack problem.

## Authors

Evan Knapke

## Prompt

Sign some free-agent players for a baseball team: you have to stay within a budget of $X, while maximizing the total VORP of the players you signed. This problem is more complex than the rod-cutting problem: you are consuming not one, but 3 limited resources (open positions, players and money), in order to maximize the value for the team. Even if the coded solution is quite short, coming up with the right recurrence is not as easy as it sounds. Some work is involved in designing meaningful test cases: coding the brute-force solution should be part of this prepatory step.

This problem is an instance of a larger, and well-studied class of optimization problems called Knapsack-problems: it might be helpful to read a bit about those before you tackle this project. There are many variants: try to identify the type of Knapsack-problem that is closest to yours, and adapt the solution.

## Acknowledgments

Prof. Nicolas Renet for putting the requirements together

## Technologies

- Python
- Test Driven Development