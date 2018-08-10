const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const CampusScheme = new Scheme({
    name_campus: String,
    addr_campus: String,
    phone_campus: String,
    site_campus: String,
    city_campus: String
})

let CampusModels = mongoose.model('campuses', CampusScheme, 'campuses', true)
module.exports.CampusModels = CampusModels