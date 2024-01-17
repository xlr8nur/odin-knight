// bfs = breadth-first search

function Node(bfs, path) {
    if (bfs[0] < 0 || bfs[0] > 7 || bfs[1] < 0 || bfs[1] > 7) {
        return null;
    }
    return {bfs, path};
}

function knightMoves([x, y], [a, b]) {
    let q = [Node([x,y], [[x, y]])];
    let currentNode = q.shift();

    while(currentNode.bfs[0] !== a || currentNode.bfs[1] !== b) {
        let moves = [
            [currentNode.bfs[0] + 2, currentNode.bfs[1] -1],
            [currentNode.bfs[0] + 2, currentNode.bfs[1] +1],
            [currentNode.bfs[0] - 2, currentNode.bfs[1] -1],
            [currentNode.bfs[0] - 2, currentNode.bfs[1] +1],
            [currentNode.bfs[0] + 1, currentNode.bfs[1] -2],
            [currentNode.bfs[0] + 1, currentNode.bfs[1] +2],
            [currentNode.bfs[0] - 1, currentNode.bfs[1] -2],
            [currentNode.bfs[0] - 1, currentNode.bfs[1] +2],
        ];
        moves.forEach((move => {
            let node = Node(move, currentNode.path.concat([move]));
            if(node) {
                q.push(node);
            }
        }));
        currentNode = q.shift();
    }
    console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
    currentNode.path.forEach((bfs) => {
        console.log(bfs);
    });
}

//example
knightMoves([3,3], [4,3]);