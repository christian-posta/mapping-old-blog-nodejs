/**
 * Created by ceposta on 2/27/15.
 */
var http = require('http');
var url = require('url');
var mappings = require('mapping');

http.createServer(function(req,res){
    var query_parts = url.parse(req.url, true);
    var query = query_parts.query;
    var path = query_parts.pathname;

    if( query.p != undefined && mappings[query.p] != undefined) {
        console.log("try to redirect to " + mappings[query.p])
        res.writeHead(302, { 'Location': mappings[query.p]});
        res.end();
    }else if(path == '/blog'){
        res.writeHead(302, { 'Location': 'http://blog.christianposta.com'});
        res.end();
    }else {
        res.write('<html>Maybe looking for <a href="http://blog.christianposta.com">blog.christianposta.com</a>?</html>')
        res.end();
    }

}).listen(9000);
console.log("Listenting at http://localhost:9000");