
const {art, fewBlankLines} = require('./src/art.js');
const startTakingInput = require('./src/startTakingInput.js');

fewBlankLines();
art();
setTimeout(() => {
  startTakingInput();
}, 3000);
