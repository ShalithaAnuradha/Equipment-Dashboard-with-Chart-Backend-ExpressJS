/**
 * @author : Shalitha Anuradha <shalithaanuradha123@gmail.com>
 * @since : 2021-05-06
 **/
var http = require('http');
var options = {
    host: 'http://ivivaanywhere.ivivacloud.com',
    path: '/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db&max=10&last=0'
};
var jsObject;

var req = http.get('http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db&max=300&last=0', function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    console.log("\n");
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
    }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        // console.log('BODY: ' + body);         //--------------------See the body--------
        console.log("\n");
        jsObject = JSON.parse(body.toString());
        console.log(typeof jsObject);

        // for (const index of jsObject) {      //--------------------See each equipment------
        //     console.log(index);
        // }

        // ...and/or process the entire body here.
    })
});

req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
});

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/api/v1/customers', function (req, res, next) {
    // res.json({msg: 'This is CORS-enabled for all origins!'});
    res.send(jsObject);
})

app.listen(8080, ()=> console.log('CORS-enabled web server listening on port 80'));
