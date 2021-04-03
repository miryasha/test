const https = require('https');
const fs = require('fs');
const crypto = require('crypto');


https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk

  })


   resp.on('end', () => {
    
    const dataSplit = data.split(',');
    

    let outPut = []
    dataSplit.forEach((item, index) => {
            
      if (index % 2 == 0) {
            //It's key
            outPut.push(item)
      } else {
                //It's age
         if (item.includes('age=32')){
            let result = 0;
            let currentNumber = item.length;
            result += currentNumber;
            console.log(result)
               
           
         }
      }
    
      
    })
  
    //console.log(outPut)

    fs.appendFile('output.txt', outPut + '\n', (err) => {

      if (err) {
        console.log(err);
      }
      else {
        console.log('done!');
      }
    
    });

    
         let sha1 = crypto.createHash('sha1');

         let s = fs.ReadStream('output.txt');
         s.on('data',  (d) => {
            sha1.update(d);
         });

         s.on('end',  () => {
               var generated_hash = sha1.digest('hex');
               console.log('Generated Hash for file ' + generated_hash);
         });


  });



    }).on("error", (error) => {
  console.log("Error: " + error.message);
  // parse json data here...
   

});