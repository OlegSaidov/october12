const HTTP = require("http");
var port = 8080;
const Server = HTTP.createServer((req,res) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<html><head></head><body>");
    res.write("<h3>This is a response from the local server</h3>");
    res.end("</body></html>");
});

Server.listen(port);
console.log(`The server is listening to requests on port ${port}`);
console.log("test");
