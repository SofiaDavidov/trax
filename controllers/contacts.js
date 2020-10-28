//define contacts array
const contacts = [];

const getAllContacts = (req, res) => res.send(contacts);

const createContact = (req, res) => {
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
};

const getContactsByName = (req, res) => {
	res.send(contacts.filter((item) => item.name === req.params.name));
};

module.exports.getAllContacts = getAllContacts;
module.exports.createContact = createContact;
module.exports.getContactsByName = getContactsByName;
