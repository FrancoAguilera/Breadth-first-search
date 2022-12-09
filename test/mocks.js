export const edgesArray = [
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
  {
    nodeOne: "Mark",
    nodeTwo: "Julie",
  },
];

export const nodes = ["Jhon", "Matt", "Robert", "Ana", "Susan", "Liz", "Mark", "Julie"];

export const graph = {
  Jhon: {
    node: "Jhon",
    edges: ["Matt", "Robert", "Ana"],
    visited: false,
    parent: null,
  },
  Matt: {
    node: "Matt",
    edges: ["Jhon", "Robert"],
    visited: false,
    parent: null,
  },
  Robert: {
    node: "Robert",
    edges: ["Jhon", "Matt", "Ana", "Liz", "Susan"],
    visited: false,
    parent: null,
  },
  Ana: {
    node: "Ana",
    edges: ["Jhon", "Susan", "Robert"],
    visited: false,
    parent: null,
  },
  Susan: {
    node: "Susan",
    edges: ["Ana", "Robert"],
    visited: false,
    parent: null,
  },
  Liz: { node: "Liz", edges: ["Robert"], visited: false, parent: null },
  Mark: { node: "Mark", edges: ["Julie"], visited: false, parent: null },
  Julie: { node: "Julie", edges: ["Mark"], visited: false, parent: null },
};

export const nodePath = {
  node: "Liz",
  edges: ["Robert"],
  visited: true,
  parent: {
    node: "Robert",
    edges: ["Jhon", "Matt", "Ana", "Liz", "Susan"],
    visited: true,
    parent: {
      node: "Jhon",
      edges: ["Matt", "Robert", "Ana"],
      visited: true,
      parent: null,
    },
  },
};
