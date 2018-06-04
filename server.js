const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '4200';

app.use(express.static(__dirname + '/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.set('port', port);
server.listen(port, () => console.log('API running on localhost:',port));