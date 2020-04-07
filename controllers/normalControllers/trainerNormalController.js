const Trainer = require('../../models/Trainer')
const Workout = require('../../models/Workout')
const Diet = require('../../models/Diet')
module.exports = {
    async trainerConfirmEmail(req, res){
        const { confirmToken } = req.params;
        try {
          // Finding the user with the help of token
          const trainer = await Trainer.findOne({ confirmToken });
          if (!trainer) return res.status(401).send("Invalid Credentials")
          await trainer.updateOne({ isConfirm: true, confirmToken: "" })
          return res.status(200).json({ statusCode: 200, message: 'Email Confirmed successfully...!!! You can log in now' })
        } catch (err) {
            return res.state(500).json({ statusCode: 500, message: 'Server Error' })
        }
    },
    async getTrainer(req,res){
        try {
            const tra = await Trainer.find({});
            const trainer = []
            for(let i=0; i<tra.length; i++){
                const obj = {}
                obj.name = tra[i].name
                obj.price = tra[i].price
                trainer.push(obj)
            }
            return res.status(200).json({ statusCode: 200, trainer })
          } catch (err) {
              return res.status(500).json({ statusCode: 500, message: 'Server Error' })
          }
    },
    async singleTrainer(req,res){
            const { trainerId } = req.params

        try{
            const trainer = await Trainer.findOne({ _id:trainerId });
            if (!trainer) return res.status(401).send("No such Trainer")
            let trainerInfo = {}
            trainerInfo.name = trainer.name
            trainerInfo.price = trainer.price
            const trainerWorkoutPlan = await Workout.find({trainerId:trainerId})
            console.log(trainerWorkoutPlan)
            const workout = []

            for(let i=0; i<trainerWorkoutPlan.length; i++){
                const obj = {}
                obj.name = trainerWorkoutPlan[i].workoutPlan
                obj.price = trainerWorkoutPlan[i].price
                obj.image = trainerWorkoutPlan[i].image
                obj.category = trainerWorkoutPlan[i].category
                workout.push(obj)
            }
            const trainerDietPlan = await Diet.find({trainerId:trainerId})
            
            const diet = []
            for(let i=0; i<trainerDietPlan.length; i++){
                const obj = {}
                obj.name = trainerDietPlan[i].dietPlan
                obj.price = trainerDietPlan[i].price
                obj.image = trainerDietPlan[i].image
                obj.category = trainerDietPlan[i].category
                diet.push(obj)
            }     

            // function isEmpty(obj) {
            //     for(var key in obj) {
            //         if(obj.hasOwnProperty(key))
            //             return false;
            //     }
            //     return true;
            // }

            // if(isEmpty(trainerDiet)){
            //     traDiet = null
            // }
            // if(isEmpty(trainerWorkout)){
            //     traWorkout = null
            // }

         
            return res.status(200).json({ statusCode: 200,  trainerInfo , diet , workout }) 
        }catch(err){
            console.log(err)
           return res.status(500).json({ statusCode: 500, message: 'Server Error' })
        }
    }
}