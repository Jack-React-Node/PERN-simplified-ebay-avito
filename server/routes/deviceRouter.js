const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

const authMiddleware = require('../middleware/authMiddleware');



// Open
router.get('/', deviceController.homePage) 
router.get('/device-view/:id', deviceController.getOne) 
router.post('/category/:category:offset', deviceController.getAll) 


// Closed  
router.post('/create-device/', deviceController.create)
router.get('/del/:id/', authMiddleware, deviceController.delete)
router.get('/user-devices/', authMiddleware, deviceController.deviceListUser)
router.post('/change/:id/', authMiddleware, deviceController.change) 


module.exports = router
