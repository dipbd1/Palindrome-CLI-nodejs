const prompt = require('prompt');
const {yesSir, noSir, fewBlankLines} = require('./art.js')

// colors for text

//prompt message
prompt.message = "";
prompt.delimiter = "";

//Prompt Schema
var prompt_attributes = [
    {
      // The fist input text is assigned to username variable.
      name: 'Enter Number',
      // The username must match below regular expression.
      validator: /^[1-9]\d*$/,
      // If username is not valid then prompt below message.
      warning: 'Make sure its a number',
    },
  ];

const startTakingInput = function () {
    prompt.start();
    prompt.get(prompt_attributes, function (err, result) {
      if (err) {
        console.log(err);
        return 1;
      } else {
        // console.log('Command-line received data:');
        var input = result['Enter Number']; //to take input
  
        var originalNumber = parseInt(input);
        var reversedNumber = 0;
        var remainder;
  
        // to get the reversed number
        while (input != 0) {
          remainder = input % 10;
          reversedNumber = reversedNumber * 10 + remainder;
          input = Math.floor((input /= 10));

        }

        fewBlankLines();
        if (originalNumber === reversedNumber) {
          yesSir();
        } else {
          noSir();
        }
        fewBlankLines();
      }
    });
  };

  module.exports = startTakingInput;