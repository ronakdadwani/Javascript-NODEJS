const fs = require('fs');
const { buffer } = require('stream/consumers');

console.log('READ START');

// asynchronous way to read the file 
// fs.readFile('input.txt', function(err , data){
//     if(err){
//         console.log("Error" , err);
        
//         return err;
//     }
//     console.log('Data', data.toString());
//     console.log('READ END');
    
//     return data
// })

// console.log('OTHER STUFF');

// synchronous way to read the file 

// var data = fs.readFileSync('input.txt');
// console.log('Data: ' , data.toString());
// console.log('READ END');
// console.log('OTHER STUFF');


// READ > OPEN + READ

const buf = new Buffer(1024);

// fs.open('index.txt', 'r+' , function(err , fd){
//     if(err){
//         console.log('Error in opening file: ', err);
        
//     }
//     console.log("file open successfully");
    
//     fs.read(fd, buf , 0, buf.length, 0, function(er , data ){
//         if(er){
//             console.log('error in reading file! ');   
//         }
//         console.log('data : ' , data);
//         console.log('data : ' , buf.slice(0 , data).toString());
//         fs.close(fd , function(Errer){
//             if (Errer) {
//                 console.log('Error while closing the file');
                
//             } else {
//                 console.log('success in closing the file');
                
//             }
//         })
//     })
// })



// fs.writeFile('index.txt' , "Ronak Dadwani Node JS Module" , function(err){
//     if (err) {
//         console.log('Error in writing file');
//     } else {
//         console.log('Succes in writing file ');   
//     }
// })

// fs.appendFile('index.txt' , '--javascript modules' ,'utf8',function(err){
//     if (err) {
//         console.log('errorn in appending file ');
        
//     } else {

//     console.log('successfully appended the file');
//     }
    
// })

//deleting the file 

fs.unlink('node.txt' , function (err){
    if (err) {
        console.log('Errorr in deleting the file.');
        
    } else {
        console.log("Successfully deleted the file.");
        
    }
})