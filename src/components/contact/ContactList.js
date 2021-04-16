import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  if (!contacts) {
    return <div>Loading....!</div>;
  }
  return (
    <>
      <div className="d-flex justify-content-around h-2 mt-4 mb-2">
        <h1>Contact List</h1>
        <Link
          to="/add"
          className="btn btn-primary p-1 h-25 align-item-center mt-2"
        >
          Create Contact
        </Link>
      </div>
      <div className="container card shadow-sm  align-self-center ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl-No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
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
    </>
  );
};

export default ContactList;
