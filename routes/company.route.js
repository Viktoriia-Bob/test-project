const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company.controller');

router.get('/', companyController.list);

router.get('/:id', companyController.findById);

router.delete('/:id', companyController.delete);

router.post('/', companyController.create);

module.exports = router;