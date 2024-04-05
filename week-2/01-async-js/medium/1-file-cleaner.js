// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const { error } = require('console');
const fs = require('fs')
const path = "../../02-nodejs/files/a.txt"

fs.readFile('../../02-nodejs/files/a.txt', 'utf8', function(err, data){
    outputData = removeSpaces(data);
    writeToFile(outputData);
})

function removeSpaces(text){
    cleanedText = text.replace(/\s+/g, ' ');
    return cleanedText;
}

function writeToFile(text){
    fs.writeFile(path, text, function(err, data){
        if(err){
            throw error;
        }
        else console.log("Cleaned successfully");
    })
}