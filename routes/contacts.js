const express = require('express');

//define contacts array
const contacts = [{ name: 'sofia', phoneNumber: '0522222' }];

//init router for contacts API
const router = express.Router();

//getting all the contacts
router.get('/', (req, res) => res.send(contacts));

//adding a new contact
router.post('/', (req, res) => {
	const contactInfo = req.body;
	if (!contactInfo.name || !contactInfo.phoneNumber) {
		res.send({ message: 'Missing Information', type: 'error' });
	} else {
		const newContact = {
			name: contactInfo.name,
			phoneNumber: contactInfo.phoneNumber,
		};
		contacts.push(newContact);
		res.send({
			essage: 'New contact added',
			type: 'success',
			contact: newContact,
		});
	}
});

//export router
module.exports = router;
