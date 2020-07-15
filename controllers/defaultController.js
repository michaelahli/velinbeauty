const Hair = require('../models/HairModel');
const Problem = require('../models/ProblemModel');
const FnC = require('../models/FnCModel');

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
            res.redirect('/appearance-and-fragrance');
        })
    },


}