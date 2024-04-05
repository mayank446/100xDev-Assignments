// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
//  -->

const fs = require('fs')

fs.writeFile('../../02-nodejs/files/a.txt', "Writing to file...", function(err, data){
    if(err){
        return console.log(err)
    }
    else
        console.log("Written to file.");
})