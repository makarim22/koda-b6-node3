
function convertNew (date){
    if (typeof  date !== 'string'){
        console.log('input berupa' + typeof date);
        return "Input Tidak Valid: Harus berupa string"
    }
    const dateNew = date.split('-').map(Number);
    const [day, month, year] = dateNew;

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return "Input Tanggal Tidak Valid: Format Tanggal Harus Tanggal-Bulan-Tahun dan di rentang yang valid";
    }
    return `${day}/${month}/${year}`
}

convertNew('2023-01-01')
// convertNew(true)
// convertNew(1)
module.exports = convertNew
