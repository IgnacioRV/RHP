var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
var requestIp = require('request-ip');
app.use(requestIp.mw())
 
 
app.get('/api/whoami', (req, res)=>{
	head = req.headers

	var obj = {
		"ipaddress": req.clientIp,

		"language": ((req.headers['accept-language'].split(' '))[0].split(','))[0],
		"software": req.headers['user-agent'].split('(')[1].split(')')[0]
	}
	console.log(obj)
	res.send(obj)
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
