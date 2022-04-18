const http = require('http'),
PORT = 4321,
headers = {
  'Content-Type' : 'text/plain; charset=utf-8',
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods' : 'GET, POST',
  'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers'
}
http.Server((req, res) =>{
  if(req.url === '/'){
      res.writeHead(200, headers) ;
      res.end('Hello, World!');
  }
  else if(req.url === '/login/' ){
    res.writeHead(200, headers);
    res.end('descriptor83');
  }
   else if(req.url === '/sample/' ){
    res.writeHead(200, headers);
    res.end('function task(x){ return x*this*this; }');
    
  } 
   else {
    res.writeHead(200, headers); 
    res.end('No');
  }}).listen(process.env.PORT || PORT);


/*

для варианта с type="module"

import { Server } from 'http';
import x from 'express';

и в предпоследней строке

export default Server(app)

*/
