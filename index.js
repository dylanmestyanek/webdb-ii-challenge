const server = require("./server");

const port = process.env.PORT || 4000;

server.listen(port, () => console.log("\n=== Now listening on port 4000 homie :~D ===\n"))