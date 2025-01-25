// // const http = require('http');

// // const port = process.env.PORT || 3000;

// // const server = http.createServer((req, res) => {
// //   res.setHeader('Content-Type', 'text/html');
// //   console.log(req.url);

// //   if (req.url === '/') {
// //     res.statusCode = 200;
// //     res.end('<h1>This is Ramesh</h1>');
// //   } else if (req.url === '/about') {
// //     res.statusCode = 200;
// //     res.end('<h1>Okay Timing</h1>');
// //   } else {
// //     res.statusCode = 404;
// //     res.end('<h1>Page Not Found</h1>');
// //   }
// // });

// // server.listen(port, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });


// // const http = require('http');

// // // Port configuration
// // const port = process.env.PORT || 3000;

// // // Create HTTP Server
// // const server = http.createServer((req, res) => {
// //   // Log the requested URL
// //   console.log(`Request received: ${req.url}`);
  
// //   // Set content type for the response
// //   res.setHeader('Content-Type', 'text/html');

// //   // Routing logic
// //   if (req.url === '/') {
// //     // Root URL
// //     res.statusCode = 200;
// //     res.end('<h1>This is Ramesh</h1>');
// //   } else if (req.url === '/about') {
// //     // About URL
// //     res.statusCode = 200;
// //     res.end('<h1>Okay Timing</h1>');
// //   } else {
// //     // For undefined routes
// //     res.statusCode = 404;
// //     res.end('<h1>Page Not Found</h1>');
// //   }
// // });

// // // Start the server
// // server.listen(port, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });


// const http=require('http')

// const port =process.env.PORT || 3000

// const server=http.createServer((req,res)=>{
//   console.log(`Request received  : ${req.url}`)
// //setting uo the content type
//   res.setHeader('Content-Type','text/html');
//   //Routing the logic
//   if(req.url==='/'){
//     res.statusCode=200;
//     res.end('<h1>the request is on / url</h1>')
//   }
//   else if(req.url==='/about'){
//     res.statusCode=200;
//     res.end('<h2>The request is on about page</h2>')
//   }
//   else{
//     res.statusCode=404;
//     res.end('<h1>Page not found</h1>')
//   }
//   })
//   server.listen(port,()=>{
//     console.log(`Server is listening on port : ${port}`)
// })




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