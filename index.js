const fs = require("./contacts.js");
const contactList = fs.listContacts();

(async () => {
  const contactList = await fs.removeContact("6");
  console.table(contactList);
})();


