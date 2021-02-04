const {Router}  = require('express')

const router  = Router()
const roomCtrl  = require ('../controllers/room.controller.js')

router.get('/', roomCtrl.getRooms);

router.post('/', roomCtrl.createRoom);
router.get('/:id', roomCtrl.getRoom);
router.delete('/:id', roomCtrl.deleteRoom);
module.exports =  router