const nanoid = require('nanoid');
const uniqueId = nanoid();
console.log(uniqueId);

const fs = require("./contacts.js");
const contactList = fs.listContacts();

(async () => {
  const contactList = await fs.addContact('Paula',
    'abc@gmail.com',
    '505-032-678');
  console.table(contactList);
})();


