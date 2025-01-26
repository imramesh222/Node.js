
const http=require('http')
const port=process.env.PORT || 3000
const server =http.createServer((req,res)=>{
  console.log(`request received ${req.url}`)

  res.setHeader('Content-Type','text/html')
  if(req.url==='/'){
    res.statusCode=200;
    res.end('<h1>on 200</h1>')
  }
  else if(req.url==='/about'){
        res.statusCode=200;
        res.end('<h2>The request is on about page</h2>')
  }
  else{
    res.statusCode=404;
    res.end('<h1>on 404</h1>')
  }
  })
  server.listen(port,()=>{
    console.log(`the port is running on ${port}`)
})