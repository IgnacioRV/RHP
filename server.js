var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/api/whoami', (req, res)=>{
	head = req.headers
	res.send(head['user-agent'])
	console.log(req.headers)
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
