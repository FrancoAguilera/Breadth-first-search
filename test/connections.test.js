import test from "node:test";
import assert from "node:assert";
import { bfs } from "../bfs.js";
import { edgesArray } from "./mocks.js";

test("It should find a connection path", (t) => {
  const connection = {
    nodeOne: "Jhon",
    nodeTwo: "Liz",
  };

  const actual = bfs(edgesArray, connection);
  const expected = ["Jhon", "Robert", "Liz"];

  assert.deepEqual(actual, expected, "Connection path are not equals.");
});

test("It should not find a connection path", (t) => {
  const connection = {
    nodeOne: "Jhon",
    nodeTwo: "Julie",
  };

  const actual = bfs(edgesArray, connection);
  const expected = [];

  assert.deepEqual(actual, expected, "Connection path are not equals.");
});

test("It should reject on invalid parameters", (t) => {
  const connection = {
    nodeOne: "Jhon",
  };

  assert.deepEqual(bfs(edgesArray, connection), "Parameters not valid.");
});

test("It should reject on both invalid parameters", (t) => {
  assert.deepEqual(bfs({}, {}), "Parameters not valid.");
});
