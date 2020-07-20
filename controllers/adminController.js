const Customer = require('../models/CustomerInfo');

module.exports = {
    index: (req, res) => {
        Customer.find().lean().populate('hairmodel').populate('problemmodel').populate('fragranceandcolormodel').then(customer => {
            res.render('admin/index', {
                customer: customer
            });
        });
    },
}