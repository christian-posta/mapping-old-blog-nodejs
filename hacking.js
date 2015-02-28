/**
 * Created by ceposta on 2/27/15.
 */
var http = require('http');
var url = require('url');
var m = require('./mapping');

http.createServer(function(req,res){
    var query_parts = url.parse(req.url, true);
    var query = query_parts.query;
    var mapping = m.mappings[query.p];
    if( query.p != null && mapping) {
        res.writeHead(302, { 'Location': mapping});
        res.end();
    }else {
        res.writeHead(302, { 'Location': 'http://blog.christianposta.com'});
        res.end();
    }

}).listen(4000);
console.log("Listenting at http://localhost:9000");