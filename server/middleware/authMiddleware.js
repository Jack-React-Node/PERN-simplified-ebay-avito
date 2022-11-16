
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    // return res.json(req.headers)
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization// 
        // return res.json({dec: token})
        if (!token) {
            return res.status(401).json({message: "Не авторизован1"})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        
        req.user = decoded
        // return res.json(decoded)
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован2"})
    }
};