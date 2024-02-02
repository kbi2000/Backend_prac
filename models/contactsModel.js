const mongoose=require("mongoose");
const contactSchema=mongoose.Schema({
    name:{
        type:String,
    required:[true,"please add  the contact"]
    },
    email:{
        type:String,
        required:[true,"please add  the contact"]

    },
    phone:{
        type:String,
        required:[true,"please add  the phone"]

    },

})
module.exports=mongoose.model("Contact",contactSchema);