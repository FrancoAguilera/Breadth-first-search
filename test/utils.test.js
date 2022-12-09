import test from "node:test";
import assert from "node:assert";
import { getGraph, getPath, uniqueNodes } from "../utils.js";
import { nodes, edgesArray, graph, nodePath } from "./mocks.js";

test("It should return a unique nodes array", (t) => {
  const actual = uniqueNodes(edgesArray);
  assert.deepEqual(actual, nodes, "The nodes are not equals");
});

test("It should return connections graph", (t) => {
  const actual = getGraph(nodes, edgesArray);
  assert.deepEqual(actual, graph, "The generated graph is not equal");
});

test("It should return connections graph", (t) => {
  const actual = getGraph(nodes, edgesArray);
  assert.deepEqual(actual, graph, "The generated graph is not equal");
});

test("It should return the copnnection path", (t) => {
  const actual = getPath(nodePath);
  const connection = ["Jhon", "Robert", "Liz"];
  assert.deepEqual(actual, connection, "The generated path is not valid");
});
