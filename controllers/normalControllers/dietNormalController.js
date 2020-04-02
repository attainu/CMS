const Diet = require('../../models/Diet')

module.exports = { 
    async allDiet(req,res){
        try{
            const diet =  await Diet.find({})
            return res.status(200).json({ statusCode: 200, diet })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getVeg(req,res){
        try{
                const diet = await Diet.find({category:"begineer"})
                if(!diet) return res.status(400 ).json({ statusCode: 400, message:"No such diet" })
                return res.status(200).json({ statusCode: 200, diet })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getNonveg(req,res){
        try{
                const diet = await Diet.find({category:"intermediate"})
                if(!diet) return res.status(400).json({ statusCode: 400, message:"No such diet" })
                return res.status(200).json({ statusCode: 200, diet })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getkitto(req,res){
        try{
                const diet = await Diet.find({category:"professional"})
                if(!diet) return res.status(400).json({ statusCode: 400, message:"No such diet" })
                return res.status(200).json({ statusCode: 200, diet })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    }

}