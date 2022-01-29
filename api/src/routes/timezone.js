const { Router } = require('express');
const {timezone} = require('../controllers/controllers.js');

const router = Router();

router.get('/', async(req,res,next)=>{
    try {
        let timezoneAll = await timezone();
        res.send(timezoneAll)
    } catch (error) {
        console.log(error)
    }
    
    
});

module.exports = router;