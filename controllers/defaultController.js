const Hair = require('../models/HairModel');
var HairID;
module.exports = {
    index: (req, res) => {
        res.render('default/index');
    },

    customize: (req, res) => {
        res.render('default/customize')
    },

    getProduct: (req, res) => {
        const hairType = new Hair({
            hairtype: req.body.hairType,
            activity: req.body.activity,
            moisture: req.body.moisture
        });
        hairType.save().then(hairtype => {
            console.log(hairtype);
            HairID = hairType.id;
            console.log('id : ' + HairID);
            res.redirect('/customize');
        })
    }
}