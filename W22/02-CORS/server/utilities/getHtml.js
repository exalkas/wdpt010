module.exports = (token, template) => {

    switch (template) {

        case ('register'):

            return `
            <!DOCTYPE html>
            <html>
              <body style="margin: 0; padding: 0;background-color: #000000;min-height:70vh;width:100%;">
                <img src="http://localhost:3000/logo.jpg" alt="our logo" style="width: 80px; height:80px;object-fit:center;"/>  
                <p>Welcome to our Social App!</p>
                <p>Kindly click the following link to verify your email address</p>
                <a href="http://localhost:3000/emailconfirm/${token}">Verify your email</a>
              </body>
            </html>
            `
        case ('forgotpassword'):
            
            return `
            <!DOCTYPE html>
            <html>
              <body style="margin: 0; padding: 0;background-color: #000000;min-height:70vh;width:100%;">
                <img src="http://localhost:3000/logo.jpg" alt="our logo" style="width: 80px; height:80px;object-fit:center;"/>  
                <p></p>
                <p>Kindly click the following link to change your password</p>
                <a href="http://localhost:3000/changepassword/${token}">Change your password</a>
              </body>
            </html>
            `
        default:
            return
    }
}