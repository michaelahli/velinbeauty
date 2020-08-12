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
            });
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
        var province, city;
        province = req.body.province;

        if (province == 'JawaTimur') {
            city = req.body.JawaTimur;
        } else if (province == 'JawaBarat') {
            city = req.body.JawaBarat;
        } else if (province == 'JawaTengah') {
            city = req.body.JawaTengah;
        } else if (province == 'DIY') {
            city = req.body.DIY;
        } else if (province == 'DKIJakarta') {
            city = req.body.DKIJakarta;
        } else if (province == 'Bali') {
            city = req.body.Bali;
        } else {
            city = req.body.Banten;
        }

        const CustomerID = new Customer({
            name: req.body.name,
            province: province,
            city: city,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            total: req.body.total,
            hairmodel: HairID,
            problemmodel: ProblemID,
            fragranceandcolormodel: FnCID
        });
        CustomerID.save().then(customer => {
            console.log(customer);
            //req.client.messages.create({
            //    from: 'whatsapp:+6281388404255',
            //    body: 'Ahoy world!',
            //    to: 'whatsapp:+628973991345'
            //}).then(message => console.log(message.sid));
            res.redirect('https://wa.me/628973991345?text=Halo%20Admin,%20saya%20ingin%20mengkonfirmasi%20pembayaran%20saya%20disini.');
        });
    }
}