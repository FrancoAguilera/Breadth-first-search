const utils = require("./utils");

// and now we have a graph map about the connections, we can apply
// the BFS algorithm
const bfs = (edgesList, connection) => {
  const { nodeOne: start, nodeTwo: end } = connection;
  const nodes = utils.uniqueNodes(edgesList);
  const graph = utils.getGraph(nodes, edgesList);
  const path = [];

  // BFS algorithm
  const queue = [];

  // start by looking on the start node of the graph
  graph[start].visited = true;
  queue.push(graph[start]);

  // inspect all the nodes connected to that node
  while (queue.length > 0) {
    const current = queue.shift();

    if (current.node === end) {
      return utils.getPath(current)
    }

    for (let i = 0; i < current.edges.length; i++) {
      const friend = graph[current.edges[i]];
      if (!friend.visited) {
        friend.visited = true;
        friend.parent = current;
        queue.push(friend);
      }
    }
  }

  return path;
};

module.exports = bfs;

