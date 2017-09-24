const express = require('express')
const router  = express.Router()
const clientController = require('../controllers/ClientController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/clients', ensureLoggedIn('/'), clientController.allClients)
router.get('/clients/new', ensureLoggedIn('/'), clientController.client)
router.post('/clients/new', ensureLoggedIn('/'), clientController.newClient)
router.get('/clients/:id/edit', ensureLoggedIn('/'), clientController.getEditClient)
router.post('/clients/:id/edit', ensureLoggedIn('/'), clientController.postEditClient)
router.get('/clients/:id/delete', ensureLoggedIn('/'), clientController.deleteClient)

module.exports = router
