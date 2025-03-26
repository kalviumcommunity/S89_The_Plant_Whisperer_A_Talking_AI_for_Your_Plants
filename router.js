const express = require("express");
const router = express.Router();

const userSchema = require("./schema");

router.post('/post',async(req,res)=>{
    try {
        const{plant_name, care_advice, watering_frequency, light_requirement, temperature_range, humidity_level, common_issues, reminder_set, last_watered}=req.body;
        if(!plant_name || !care_advice || !watering_frequency || !light_requirement || !temperature_range || !humidity_level || !common_issues || !reminder_set ||  !last_watered){
            res.status(400).send({msg:"All feilds are required"});
        }
        const data = new userSchema({plant_name, care_advice, watering_frequency, light_requirement, temperature_range, humidity_level, common_issues, reminder_set, last_watered});
        await data.save();
        res.status(200).send({msg:"Data created successfully"});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
})

router.get('/get',async(req,res)=>{
    try {
      const data = await userSchema.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({msg:"Something went wrong"});
    }
  })  

  router.put('/put/:id', async (req, res) => {
    try {
        const { id } = req.params; // 
        const { plant_name, care_advice, watering_frequency, light_requirement, temperature_range, humidity_level, common_issues, reminder_set, last_watered } = req.body;
        const updatedData = await userSchema.findByIdAndUpdate(
            id,
            { plant_name, care_advice, watering_frequency, light_requirement, temperature_range, humidity_level, common_issues, reminder_set, last_watered }
        );
        if (!updatedData) {
            return res.status(404).send({ msg: "Menu item not found" });
        }
        res.status(200).send(updatedData);
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await userSchema.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).send({ msg: "Menu item not found" });
        }
        res.status(200).send({ msg: "Item deleted successfully" });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" });
    }
});

module.exports = router