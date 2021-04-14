import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <h1>Contact List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl-No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </table>
    </div>
  );
};

export default ContactList;
