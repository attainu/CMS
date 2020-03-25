const passport = require('passport')
const {Strategy: localStrategy} = require('passport-local')


const Admin = require('./models/admin')

// passport-local Strategy for user-login 
passport.use(
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    async (email, password, done)=>{
        try{    
            console.log(email,password)
             const admin = await Admin.findByEmailAndPassword(email, password)
             if(!admin.isConfirm) return done(null, false, {message: 'Invalid Credentials'}) 
               
            return done(null, admin)
        }catch(err){
            if(err.name === 'authError') done(null, false, {message: err.message})
            done(err)
        }
    })
)
