const Product = require('../models/GetProduct');

module.exports = {
    index: (req, res) => {
        res.render('default/index');
    },

    customize: (req, res) => {
        res.render('default/customize')
    },

    getProduct: (req, res) => {
        const getProduct = new Product({
            product: req.body.product
        });
        getProduct.save().then(product => {
            console.log(product);
            res.redirect('/customize');
        })
    }
}