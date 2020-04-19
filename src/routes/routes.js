import { Router } from 'express';
var router = Router();

import { validateSchema } from '../services/schemavalidator';

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', function (req, res) {
    res.send('Test home page')
})

// define the about route
router.get('/about', function (req, res) {
    res.send('About Test')
})

router.post('/validate/schema', function(req, res){
    validateSchema(req, res, function(response){
        return res.send(response);
    });    
})

export default router