module.exports = {
    async getUserProfile(req, res){
        res.json( { user: req.user })
    },
    async fetchGooglePofile(req, res){
        const user = req.user
        const accessToken = await user.generateToken('login')
        res.json( {statusCode: 200 , user, accessToken: `JWT ${accessToken}` , expiresIn: '12h'} )    
    },
    async fetchfacebookPofile(req, res){
        const user = req.user
        const accessToken = await user.generateToken('login')
        res.json( {statusCode: 200 , user, accessToken: `JWT ${accessToken}` , expiresIn: '12h'} )    
    }
}