const fs=require('fs')
// fs.readFile('index.js','utf8',(err,data)=>{
//   console.log(err,data)
// })

// const a=fs.readFileSync('index.js')
// console.log(a.toString())


b=fs.writeFileSync('file.txt',"this is data2.")
console.log(b)
console.log("Finished reading file")
