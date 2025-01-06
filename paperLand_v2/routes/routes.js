const express = require("express")
const homeController = require('../controllers/home.js')


const router = express.Router()


router.get('/', homeController.home)
router.get('/usine' , homeController.usine)
router.get('/bag' , homeController.bag)
router.get('/impression' , homeController.impression)
router.get('/plate_size' , homeController.sizePlate)
router.get('/torsade_size' , homeController.sizeTorsade)



router.all('*', homeController.error404);
module.exports.router = router