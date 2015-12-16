var app = require('express')();

var cors = require('cors');
app.use(cors());

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req,res) { console.log(req.url); res.send('Listening'); });
app.get('/podcasts', function(req,res) {
	console.log( req.url );
	res.json({id:1, name:"The Morning Stream"});
});

io.on('connection', function(socket) {
	console.log('a user connected');
	io.emit('test');
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});
