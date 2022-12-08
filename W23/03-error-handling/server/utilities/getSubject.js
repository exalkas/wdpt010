module.exports = (template) => {

    switch (template) {

        case ('register'):

            return 'Welcome to Wdpt10 social app ✔'
        case ('forgotpassword'):
            console.log("🚀 ~ forgotpassword 'Your instructions to change password for wdpt10'" )
            
            return 'Your instructions to change password for wdpt10'
        default:
            return
    }
}