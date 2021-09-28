const fs = require('fs');
const  readXlsxFile = require('read-excel-file/node');

const read = ({file}) => {
 return readXlsxFile(file); 
}

module.exports = {
   read,
}