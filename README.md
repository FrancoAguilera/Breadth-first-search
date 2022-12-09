# breadth-first search

_Implements the breadth-first search (BFS) algorithm to get the connection path between two nodes in a graph._

</br>

#### From [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)

</br>

## Install

```bash
$ npm install breadth-first-search
```

## The friends example
Given this friendship connection graph: 

![friends](https://i.ibb.co/YTnhwGK/friends.png)

## usage

```javascript
// import the lib
import { bfs } from "bfs";

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

// list all connections on the above friendship graph
const friendsList = [
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
const possibleConnection = {
  nodeOne: "Jhon", 
  nodeTwo: "Liz"
};

bfs(friendsList, possibleConnection) // ['Jhon', 'Robert', 'Liz']
```
