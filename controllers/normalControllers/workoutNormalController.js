const Workout = require('../../models/Workout')
module.exports = {   
    async allWorkout(req,res){
        try{
            const workout =  await Workout.find({})
            return res.status(200).json({ statusCode: 200, workout })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getbegginer(req,res){
        try{
                const workout = await Workout.find({category:"begineer"})
                if(!workout) return res.status(400 ).json({ statusCode: 400, message:"No such workout" })
                return res.status(200).json({ statusCode: 200, workout })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getintermediate(req,res){
        try{
                const workout = await Workout.find({category:"intermediate"})
                if(!workout) return res.status(400).json({ statusCode: 400, message:"No such workout" })
                return res.status(200).json({ statusCode: 200, workout })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    },
    async getprofessional(req,res){
        try{
                const workout = await Workout.find({category:"professional"})
                if(!workout) return res.status(400).json({ statusCode: 400, message:"No such workout" })
                return res.status(200).json({ statusCode: 200, workout })
        }catch(err){
            return res.status(500).json({statusCode: 500, message:"Server  Error"}) 
        }
    }

}
