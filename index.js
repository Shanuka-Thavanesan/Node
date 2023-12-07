// create server
const http= require('http')
const port =3100;
const server= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('hello world');
});
server.listen(port,()=>{
    console.log(`server running at ${port}`)
});

// create file server(fs)
const fs=require('fs');
fs.writeFile('file.text','hello world',(err)=>{
    if(err)throw err;
    console.log("data written file")
});

// read file
fs.readFile('file.text','utf8',(err, data)=>{
    if(err)throw err;
    console.log(data);
});

// import module in node.js
const app=require('./app');
app.sayHello;

// Node.js Event
const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(message);
});
emitter.emit('customEvent', 'Hello World'); // Outputs: "Hello World"