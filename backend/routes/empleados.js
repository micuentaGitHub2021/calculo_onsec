const express = require('express');
const ctrl = require('../controllers/empleados.js');

const router = express.Router();

router.get('/',ctrl.getEmpleados);
// router.get('/:id',ctrl.getProduct);
router.post('/',ctrl.newempleado);
//router.put('/:id',ctrl.updateProduct);
router.delete('/:id',ctrl.deleteEmpleado);
module.exports=router;
