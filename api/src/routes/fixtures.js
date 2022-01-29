const { Router } = require('express');
const {fixtures, headToHeadAll, statictis, event,liveFixture,lastFixtures} = require('../controllers/controllers.js');

const router = Router();

router.get('/next', async(req,res,next)=>{
    try {
        let fixture = await fixtures();
        res.send(fixture)
    } catch (error) {
        next(error)
    }
    
    
});

router.get('/', async(req,res,next)=>{
    try {
        let fixtureLive = await liveFixture();
        res.send(fixtureLive)
    } catch (error) {
        next(error)
    }
    
    
});

router.get('/last', async(req,res,next)=>{
    try {
        let fixture = await lastFixtures();
        res.send(fixture)
    } catch (error) {
        next(error)
    }
    
    
});

router.get('/head/:id', async (req,res,next)=>{
    const {id} = req.params;
    try {
        let head = await headToHeadAll(id);
        res.send(head)
    } catch (error) {
        next(error)
    }
})

router.get('/statictis', async (req,res,next)=>{
    const {fixture} = req.query;
    try {
        let stac = await statictis(fixture);
        res.send(stac)
    } catch (error) {
        next(error)
    }
})

router.get('/event', async (req,res,next)=>{
    const {fixture} = req.query;
    try {
        let e = await event(fixture);
        res.send(e)
    } catch (error) {
        next(error)
    }
})






module.exports = router;