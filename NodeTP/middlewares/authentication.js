const passport = require('passport')

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        console.log('Validando autenticación')
    })
}