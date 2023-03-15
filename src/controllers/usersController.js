module.exports = {
    register: (req, res) => res.render('register', {
        title: 'REGISTER'
    }),
    login: (req, res) => res.render('login', {
        title: 'LOGIN'
    }),
}
