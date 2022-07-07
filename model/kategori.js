const mongoose = require('mongoose')

const useModel = mongoose.Schema({
    namaKategori: {
        type: String
    },
    keterangan: {
        type: String
    },
})

module.exports = mongoose.model('kategori', useModel)