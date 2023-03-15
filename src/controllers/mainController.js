module.exports = {
    index: (req, res) => res.render('index', {
        title: 'INDEX'
    }),
    
    admin: (req, res) => res.render('admin', {
        name: req.query.admin,
        title: 'ADMIN'
    }),
}
