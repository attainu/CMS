module.exports = {
    async getAdminProfile(req, res){
        res.json( { user: req.user })
    }
}