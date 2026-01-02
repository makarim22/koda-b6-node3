
function convertNew (date){
    if (typeof  date !== 'string'){
        return "Input Tidak Valid: Harus berupa string"
    }
    const dateNew = date.split('-');
    const [day, month, year] = dateNew;

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1970 || year > 2026) {
        return "Input Tanggal Tidak Valid: Format Tanggal Harus Tanggal-Bulan-Tahun dan di rentang yang valid";
    }
    return `${day}/${month}/${year}`
}

module.exports = convertNew