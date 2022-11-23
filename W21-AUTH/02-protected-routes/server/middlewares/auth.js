const jwt = require('jsonwebtoken')

module.exports.auth = async (req, res, next) => {

    try {
        
        console.log('auth here. cookies are', req.cookies)

        const token = req.cookies.wdpt10

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("🚀 ~ decoded", decoded)

        if (!decoded._id) return res.send({success: false, errorId: 9})
        next()
    } catch (error) {
        
        console.log("🚀 ~ Error in auth", error.message)

        res.send({success: false, error: error.message})
    }
}