# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating state within the effect without specifying dependencies that prevent infinite rerenders.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file shows the corrected implementation.

## Bug Description
The `useEffect` hook in `bug.js` attempts to increment the `count` state variable on every render. Since the effect doesn't list `count` as a dependency, the effect is triggered continuously, causing an infinite loop and likely crashing the application.

## Solution
The solution, found in `bugSolution.js`, involves adding a dependency array to `useEffect`. This ensures the effect only runs after the initial render and not on every state update.