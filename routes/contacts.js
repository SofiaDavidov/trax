const express = require('express');
const contacts = require('../controllers/contacts.js');

//init router for contacts API
const router = express.Router();

//getting all the contacts
router.get('/', contacts.getAllContacts);

//adding a new contact
router.post('/', contacts.createContact);

//finding a contacts by name
router.get('/:name', contacts.getContactsByName);

//export router
module.exports = router;
