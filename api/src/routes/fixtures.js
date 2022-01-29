const { Router } = require('express');
const {fixtures, headToHeadAll, statictis, event} = require('../controllers/controllers.js');

const router = Router();

router.get('/', async(req,res,next)=>{
    try {
        let fixture = await fixtures();
        res.send(fixture)
    } catch (error) {
        next(error)
    }
    
    
});

router.get('/head', async (req,res,next)=>{
    try {
        let head = await headToHeadAll();
        res.send(head)
    } catch (error) {
        next(error)
    }
})

router.get('/statictis', async (req,res,next)=>{
    try {
        let stac = await statictis();
        res.send(stac)
    } catch (error) {
        next(error)
    }
})

router.get('/event', async (req,res,next)=>{
    try {
        let e = await event();
        res.send(e)
    } catch (error) {
        next(error)
    }
})






module.exports = router;