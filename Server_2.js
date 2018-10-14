// This is a node Server
const HTTP = require("http");
var port = 8085;
const Server = HTTP.createServer(function(req,res){
  res.writeHead(200, {"content-type":"text/html"});
  res.write("<html><head></head><body>");
  res.write("<h1>This is a server running on NODE.js</h1>");
  res.end("</body></html>");
});

Server.listen(port);
console.log(`The server is running on port ${port}, please check your browser.`);
