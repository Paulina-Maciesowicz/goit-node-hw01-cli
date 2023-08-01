const nanoid = require('nanoid');
const uniqueId = nanoid();
console.log(uniqueId);

const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  //   console.log("test");
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    if (contact === undefined) {
      return `id ${contactId} not found`;
    }
    return contact;
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  //   setContacts(updatedContacts);
  {
    try {
      const data = await fs.readFile(contactsPath, "utf-8");
      const contacts = JSON.parse(data);
      const contact = contacts.find((c) => c.id === contactId);
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      if (contact === undefined) {
        return `id ${contactId} not found`;
      }
      const updatedContactsJSON = JSON.stringify(updatedContacts);
      //   console.log(updatedContactsJSON);

      await fs.writeFile(contactsPath, updatedContactsJSON);
    } catch (error) {
      console.error(error);
    }
  }
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  const updatedContacts = [...contacts, newContact];
  const updatedContactsJSON = JSON.stringify(updatedContacts);
await fs.writeFile(contactsPath, updatedContactsJSON);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
