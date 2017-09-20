const express = require('express');
const router  = express.Router();
const clientController = require('../controllers/ClientController')

router.get('/users/new', ensureLoggedIn('/'), clientController.get)
router.post('/users/new', ensureLoggedIn('/'), clientController.post)
router.get('/users/:id/edit', ensureLoggedIn('/'), clientController.get_edit)
router.post('/users/:id/edit', ensureLoggedIn('/'), clientController.put)
router.get('/users/:id/delete', ensureLoggedIn('/'), clientController.delete)

module.exports = router;
