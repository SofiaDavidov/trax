# Trax - Home Assignment
<h3>Contact List Using NodeJS and ExpressJS</h3>
</hr>

## Installation

1. Clone the repo
```sh
git clone https://github.com/SofiaDavidov/trax.git
```
2. Install NPM packages
```sh
npm install
```
3. Start the server 
```sh
npm start
```

## Usage
<br>

Getting all the contacts
* Method 
GET
* URL
```sh
/contacts
```

<br>

Adding a new contact
* Method 
POST
* URL

```sh
/contacts
```

* Request Body (json)
**Required:**

```sh
{"name":NAME, "phoneNumber":PHONENUMBER}
```

<br>

Finding contacts by name
* Method 
GET
* URL

```sh
/contacts/:name
```
