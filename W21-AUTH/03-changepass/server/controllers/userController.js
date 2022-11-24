const User = require('../models/User')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10;
const jwt = require('jsonwebtoken');
const { sendMail } = require('../utilities/mail');

module.exports.register = async (req, res) => {
    try {
        
        console.log("🚀 ~ register here: ", req.body)

        const {email, username, password} = req.body;

        if (!email || !username || !password ) {
            res.send({success: false, error: 'validation failed'})

            return
        }

        const salt = await bcrypt.genSalt(10)
        console.log("🚀 ~ salt", salt)

        req.body.password = await bcrypt.hash(password, salt)
        console.log("🚀 ~ hashedPass", req.body.password)

        const userCreated = await User.create( req.body)
        console.log("🚀 ~ userCreated", userCreated)

        const token = jwt.sign({_id: userCreated._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        sendMail(token)

        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in register", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.list = async (req, res) => {

    try {
        
        console.log("🚀 ~ list here: ")

        const users = await User.find()
        console.log("🚀 ~ users", users)
       
        res.send({success: true, users})
    } catch (error) {
    
        console.log("🚀 ~ Error in list users", error.message)

        res.send({success: false, error: error.message})
        
    }


}

module.exports.delete = async (req, res) => {

    try {
        
        console.log('delete: ', req.query)

        const user = await User.findByIdAndDelete(req.query.id)
        console.log("🚀 ~ user", user)

        if (!user) {
            res.send({success: false, error: 'User not found'})
            return
        }
        
        res.send({success: true})

    } catch (error) {
        console.log('Error in delete user', error.message)

        res.send({success: false, error: error.message})
    }
}

module.exports.edit = async (req, res) => {
    try {
        
        console.log("🚀 ~ edit here: ", req.body)

        const {email, username, password} = req.body;

        if (!email || !username || !password ) {
            res.send({success: false, error: 'validation failed'})

            return
        }

        const user = await User.findByIdAndUpdate(req.body._id, {email, username, password}, {new: true})
        console.log("🚀 ~ user", user)

        if (!user) {
            res.send({success: false, error: 'user not found'})
            return
        }
       
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in edit", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.login = async (req, res) => {

    try {
        
        console.log("🚀 ~ login here: ")
        const {email, username, password} = req.body // emailOrUser, password

        if ((!email && !username ) || !password) { // !emailOrUser || !password
            res.send({success: false, error: 1})
            return
        }

        const userFound = await User.findOne({
            $or: [{username: username}, {email: email}], //$or: [{username: emailOrUser}, {email: emailOrUser}]
            // password: password
            verified: true
        }).select('-__v')
        console.log("🚀 ~ userFound", userFound)

        if (!userFound) return res.send({success: false, error: 2})

        const isMatch = await bcrypt.compare(password, userFound.password)
        console.log("🚀 ~ isMatch", isMatch)

        if (!isMatch) return res.send({success: false, error: 3})

        // payload, secretkey, options
        const token = jwt.sign({_id: userFound._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        console.log("🚀 ~ token", token)

        res.cookie('wdpt10', token)

        // remove password from userfound
        const user =  userFound.toObject()
        delete user.password

        res.send({success: true, user})
    } catch (error) {
    
        console.log("🚀 ~ Error in Login users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.profile = async (req, res) => {

    try {
        // console.log("🚀 ~ profile: req.body", req.body)
        // console.log("🚀 ~ profile: req.file", req.file)

        const {email, _id, username} = req.body

        if (!email || !_id || !username) {
            res.send({success: false, errorId: 1})
            return
        }

        if (req.file?.filename) req.body.image = req.file.filename

        const user = await User.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -password')
        console.log("🚀 ~ user", user)
      
        if (!user) {
            res.send({success: false, errorId: 2})
            return
        }
        res.send({success: true, user})
    } catch (error) {
    
        console.log("🚀 ~ Error in Profile users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.logout = async (req, res) => {

    try {
        
        res.clearCookie('wdpt10')
       
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in logout users", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.emailConfirm = async (req, res) => {

    try {
        
       
        console.log("🚀 ~ hello from  emailconfirm", req.body)

        const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET)
        console.log("🚀 ~ decoded", decoded)

        const updatedUser = await User.findByIdAndUpdate({_id: decoded._id}, {verified: true}, {new: true})
        console.log("🚀 ~ updatedUser", updatedUser)
       
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in emailconfirm", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.forgotPassword = async (req, res) => {

    try {
        
       
        console.log("🚀 ~ hello from  forgotPassword", req.body)

        const emailOrUser = req.body.emailOrUsername

        const user = await User.findOne({$or: [{email: emailOrUser}, {username: emailOrUser}]})
        console.log("🚀 ~ user", user)

        if (!user) return res.send({success: false, errorId: 10})

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        console.log("🚀 ~ token", token)
       
        sendMail(token, 'forgotpassword')

        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in forgotPassword", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.changePassword = async (req, res) => {

    try {
        console.log("🚀 ~ hello from  changePassword", req.body)

        const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET)
        console.log("🚀 ~ decoded", decoded)

        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        console.log("🚀 ~ salt", salt)

        const password = await bcrypt.hash(req.body.password, salt)
        console.log("🚀 ~ hashedPass", req.body.password)

        const updatedUser = await User.findByIdAndUpdate(
            {_id: decoded._id},
            {password},
            {new: true}
            )
        console.log("🚀 ~ updatedUser", updatedUser)

        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in changePassword", error.message)

        res.send({success: false, error: error.message})
        
    }
}