const jwt = require('jsonwebtoken')
const jwtSecret = require('../config')

module.exports = function(req, res, next) {
    // Get token from geader
    const token = req.header('x-auth-token')

    // Check if not token
    if(!token) {
        return res.status(401).json({msg : 'No token, authorization denied!'})
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)

        req.user = decoded.user
        
        next()

    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid!'})
    }

}