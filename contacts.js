const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

/*
 * Skomentuj i zapisz wartość
 * const contactsPath = ;
 */

// TODO: udokumentuj każdą funkcję
async function listContacts() {
//   console.log("test");

    const data = await fs.readFile(contactsPath, "utf-8");
    const contact = JSON.parse(data);
    return contact;
  // ...twój kod
}

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = { listContacts, getContactById, removeContact, addContact };
