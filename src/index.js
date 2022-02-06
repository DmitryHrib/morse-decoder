const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const wordLength = 10;
    const arrayExpr = [];
    const arrayMorze = [];
    const arrayChar = [];
    const zero = /0/g;
    const ten = /10/g;
    const eleven = /11/g;
      
    for (let i = 0; i < expr.length; i += wordLength) {
      arrayExpr.push(expr.substring(i, i + wordLength))
    }
    arrayExpr.forEach((elem) => {
      arrayMorze.push(elem.replace(ten, `.`).replace(eleven, `-`).replace(zero, '').replace('**********', ' '));
    })
    arrayMorze.forEach((elem) => {
      MORSE_TABLE.hasOwnProperty(elem) ? arrayChar.push(MORSE_TABLE[elem]) : arrayChar.push(elem);
    })
    
    return arrayChar.join('')
}

module.exports = {
    decode
}