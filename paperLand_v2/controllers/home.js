const db = require('../models/database.js')

function home (req, res) {
    /*
        let [rows, fields] = db.query('SELECT * FROM tablename')
    */
    
    res.render('home.ejs')
}
function usine (req , res){

    res.render('usine.ejs')
}

function bag (req , res){
    res.render('bag.ejs')
}
function impression (req , res){
    res.render('impression.ejs')
}
function sizePlate (req , res){
    res.render('plate_size.ejs')
} 
function sizeTorsade (req , res){
    res.render('torsade_size.ejs')
}
module.exports.impression = impression
module.exports.usine = usine
module.exports.home = home
module.exports.bag = bag
module.exports.sizePlate = sizePlate
module.exports.sizeTorsade = sizeTorsade