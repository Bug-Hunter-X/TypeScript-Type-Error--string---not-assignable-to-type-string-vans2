# TypeScript Type Error: string[] not assignable to type string

This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## Bug

The `greeter` function expects a single string argument. However, the `user` variable is an array of strings.  Calling `greeter` with `user` results in a type error because TypeScript correctly identifies the type mismatch.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or modifying the way the `user` variable is handled.