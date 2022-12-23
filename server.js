const server = require("./index.js");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
