import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import AddContact from "./components/add-contact/AddContact";
import ContactList from "./components/contact/ContactList";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import { api } from "./api/contacts";
import EditContact from "./components/edit-contact/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // fetch contact
  useEffect(() => {
    api.get("/contacts").then((result) => {
      const contacts = result.data;
      if (contacts) {
        setContacts(contacts);
      }
    });
  }, []);

  // add contact
  const addContact = (contact) => {
    const request = {
      uuidv4,
      ...contact,
    };
    api.post("/contacts", request).then((response) => {
      setContacts([...contacts, response.data]);
    });
  };

  //delete contact
  const deleteContact = (id) => {
    api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //update contact
  const updateContact = (contact) => {
    console.log(contact);
    api.patch(`/contacts/${contact.id}`, contact).then((result) => {
      const { id, name, email } = result.data;
      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? { ...result.data } : contact;
        })
      );
    });
  };
  return (
    <div className="container-fluid align-items-center">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ContactList
              {...props}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={(props) => <AddContact {...props} addContact={addContact} />}
        />
        <Route
          exact
          path="/edit:id"
          render={(props) => (
            <EditContact {...props} updateContact={updateContact} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
