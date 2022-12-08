# breadth-first-search

_Implements the breadth-first search (BFS) algorithm to get the connection path between two nodes._


## Install

```bash
$ npm install breadth-first-search
```

## The friends example
Given: 

![friends](https://i.ibb.co/YTnhwGK/friends.png)

## usage

```javascript
// import the lib
const bfs = require("./bfs")

// create a "connections" array with the given form
/*
[
  {
    nodeOne: "Jhon",
    nodeTwo: "Matt",
  },
  {
    nodeOne: "Jhon",
    nodeTwo: "Robert",
  },
  ...
]
*/

// list all connections on the above graph
const edgesArray = [
  {
    nodeOne: "Jhon",
    nodeTwo: "Matt",
  },
  {
    nodeOne: "Jhon",
    nodeTwo: "Robert",
  },
  {
    nodeOne: "Jhon",
    nodeTwo: "Ana",
  },
  {
    nodeOne: "Matt",
    nodeTwo: "Robert",
  },
  {
    nodeOne: "Ana",
    nodeTwo: "Susan",
  },
  {
    nodeOne: "Ana",
    nodeTwo: "Robert",
  },
  {
    nodeOne: "Robert",
    nodeTwo: "Liz",
  },
  {
    nodeOne: "Robert",
    nodeTwo: "Susan",
  },
];

// create a possible connection
const connection = {
  nodeOne: "Jhon", 
  nodeTwo: "Liz"
};

bfs(edgesArray, connection) // ['Jhon', 'Robert', 'Liz']
```
