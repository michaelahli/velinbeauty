const Hair = require('../models/HairModel');
const Problem = require('../models/ProblemModel');
const FnC = require('../models/FnCModel');
const Customer = require('../models/CustomerInfo');

var HairID, ProblemID, FnCID;
module.exports = {
    index: (req, res) => {
        res.render('default/index');
    },

    customize: (req, res) => {
        res.render('default/customize');
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
            res.redirect('/solve');
        })
    },

    solve: (req, res) => {
        Problem.find().lean().then(problem => {
            res.render('default/solve', {
                problem: problem
            })
        });
    },

    getProblem: (req, res) => {
        var problems = req.body.problems;
        var addkeratin = req.body.keratin ? true : false;

        const Solve = new Problem({
            problem: problems,
            keratin: addkeratin
        });
        Solve.save().then(problems => {
            ProblemID = Solve.id;
            console.log(problems);
            console.log("id : " + ProblemID);
            res.redirect('/appearance-and-fragrance');
        })
    },

    appearanceandfragrance: (req, res) => {
        res.render('default/appearance-and-fragrance');
    },
    getFnC: (req, res) => {

        const fragranceandcolor = new FnC({
            fragrance: req.body.fragrance,
            color: req.body.color
        });
        fragranceandcolor.save().then(fnc => {
            FnCID = fragranceandcolor.id;
            console.log(fnc);
            console.log("id : " + FnCID);
            res.redirect('/id-and-payment');
        });
    },

    idandpayment: (req, res) => {
        res.render('default/id-and-payment');
    },

    getCustomerInfo: (req, res) => {
        const CustomerID = new Customer({
            name: req.body.name,
            province: req.body.province,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            hairmodel: HairID,
            problemmodel: ProblemID,
            fragranceandcolormodel: FnCID
        });
        CustomerID.save().then(customer => {
            console.log(customer);
            res.redirect('https://wa.me/6281388404255');
        });
    }
}