module.exports = {
    index: (req, res) => {
        res.render('default/index');
    },

    customize: (req, res) => {
        res.send('Lets Get Started');
    }
}