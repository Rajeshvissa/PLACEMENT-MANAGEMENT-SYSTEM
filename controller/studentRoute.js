const express = require('express');
const studentRoute = express.Router();
const studentSchema = require("../modal/studentSchema");
const mongoose = require("mongoose");

// studentRoute.get('/',(req,res)=>{
//     res.send("Router inside home page");
// })
// studentRoute.get('/about',(req,res)=>{
//     res.send("Router inside about page");
// })
// module.exports = studentRoute;



studentRoute.post("/create-student",(req,res)=>{

    studentSchema.create(req.body,(err,data)=>{

        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.get('/',(req,res)=>{

    studentSchema.find((err,data)=>{

        if(err)
            return err
        

        else
            res.json(data)
        
    })
    
})

studentRoute.route('/update-student/:id').get((req,res)=>{

    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{

        if(err)
            return err;

        else
            return res.json(data);

    })

}).put((req,res)=>{

    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),

    {$set:req.body},(err,data)=>{
        if(err)
            return err;

        else

            return res.json(data);
    }

)
})


studentRoute.delete("/delete-student/:id",(req,res)=>{

    studentSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),

    (err,data)=>{
        if(err)

            return err;

        else 
        
            res.json(data);
    }

)
})



module.exports=studentRoute;