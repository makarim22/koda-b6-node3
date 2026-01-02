
const converter2 = require('./convert2.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan tanggal: ', (tanggal) => {
    stringTanggal = tanggal.toString();
    console.log(converter2(stringTanggal));
    rl.close();
});


