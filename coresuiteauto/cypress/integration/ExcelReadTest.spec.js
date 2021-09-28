
import { CustomCypress } from '../support/commands';



describe('Testing reading xlsx', () => {
    it(' Load and read ', () => {
        var excelToJson = require('convert-excel-to-json');

        var result = excelToJson({
        sourceFile: 'input.xlsx',
        header: {
        
            rows: 1 
        },
        columnToKey: {
           '*': '{{columnHeader}}'
        }
        });   
        var jsonfile = require('jsonfile')

var file = 'output.json'

jsonfile.writeFile(file, result, function (err) {
console.error(err)
});
});
});
