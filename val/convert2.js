
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

    if( month = 2 || month || 4 month || 6 || month || 8 || month || 10 month || 12) {
        return "maksimal tanggal adalah 30"
    }
    
    return `${day}/${month}/${year}`
}



module.exports = convertNew
