import { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./components/add-contact/AddContact";
import ContactList from "./components/contact/ContactList";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const id = Math.floor(Math.random() * 99);
  const LOCAL_STORAGE = "contacts";

  const addContact = (contact) => {
    setContacts([...contacts, { id, ...contact }]);
  };
  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container-fluid align-items-center">
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
