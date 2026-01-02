
function convertNew (date){
    if (typeof  date !== 'string') {
        return "input tidak valid: harus berupa string";
    }
    const dateNew = date.split('-').map(Number);

     if (dateNew.length !== 3) {
        return "Input Tanggal Tidak Valid: Format Tanggal Harus Tanggal-Bulan-Tahun";
    }

    const [day, month, year] = dateNew;

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return "Rentang hari atau bulan tidak valid";
    }
    return `${day}/${month}/${year}`
}


module.exports = convertNew
