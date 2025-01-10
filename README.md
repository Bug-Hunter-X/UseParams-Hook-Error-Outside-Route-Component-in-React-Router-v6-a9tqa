# React Router v6 useParams Hook Error

This repository demonstrates a common error encountered when using the `useParams()` hook in React Router v6.  The error occurs when attempting to access `useParams()` outside of a component that is directly nested within a `<Route>` element.

## The Problem

The `useParams()` hook is designed to retrieve parameters from the URL within the context of a route.  If used outside this context, it will not have access to the routing information and will throw an error.

## The Solution

The solution is to ensure that the component using `useParams()` is a child of a `<Route>` component, correctly defining the path for parameters to be extracted from the URL.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in the console.
5. Refer to `bugSolution.js` for the correct implementation.