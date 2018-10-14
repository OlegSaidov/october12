const HTTP = require("http");
var port= 8080;
const Server = HTTP.createServer((req, res) => {
  res.writeHead(200, {"content-type":"text/html"});
  res.write("<html><head></head><body>");
  res.write("<h2>Hello the world of Git and Node</h2>");
  res.end("</body></html>");
});

  Server.listen(port);

  console.log(`The server is running on ${port}`);
