const CampusModels = require('../models/CampusModel').CampusModels
module.exports=function(app){

    app.get('/fourcampus/campuses', (req, res)=>{
        CampusModels.find({}, (err, campuses)=>{
            if(err)
            return res.send(err)
            res.json(campuses)
        })
    })
    app.get('/fourcampus/campuses/:id', (req, res)=> {
        CampusModels.find({'_id':req.params.id}, (err, campuses)=> {
            if(err)
            return res.send(err)
            res.json(campuses)
        })
    })

    app.post('/fourcampus/campuses/add', (req, res)=>{
        const campuses = new CampusModels()
        campuses.name_campus=req.body.name_campus
        campuses.addr_campus=req.body.addr_campus
        campuses.phone_campus=req.body.phone_campus
        campuses.site_campus=req.body.site_campus
        campuses.city_campus=req.body.city_campus

        console.log(req.body.name_campus)
        campuses.save((err,campuses)=>{
            if(err)
            return res.send(err)
            res.json({'status':'OK!', data:campuses})
        })
        
    })
    app.put('/fourcampus/campuses/edit',(req, res)=>{
        CampusModels.findByName(req.body.name, (err, campuses)=>{
            if(err)
            return res.send(err)
            campuses.name_campus=req.body.name_campus
            campuses.addr_campus=req.body.addr_campus
            campuses.phone_campus=req.body.phone_campus
            campuses.site_campus=req.body.site_campus
            campuses.city_campus=req.body.city_campus

            campuses.save((err, campuses)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!', data:campuses})  
            })
        })
    })
    app.delete('/fourcampus/campuses/delete/:id', (req, res)=>{
        CampusModels.findById(req.params.id, (err, campuses)=>{
            if(err)
            return res.send(err)
            campuses.remove((err)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!'})
            })
        })
    })
    
}