import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const AddContact = ({ addContact, history }) => {
  const [newContact, setNewContact] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    history.push("/");
  };
  return (
    <>
      <div className="d-flex justify-content-around h-2 mt-4 mb-2">
        <h1>Add Contact</h1>
        <Link to="/" className="btn btn-danger p-1 h-25 align-item-center mt-2">
          Cancel
        </Link>
      </div>
      <div className="container">
        <main className="form">
          <form className="card shadow-sm border-0" onSubmit={handleSubmit}>
            <div className="card-body col-sm-4 col-xs-1 align-self-center">
              <input
                type="text"
                name="name"
                className="form-control mt-3"
                placeholder="Name"
                value={newContact.name ?? ""}
                onChange={handleChange}
                autoFocus
                required
              />
              <label
                htmlFor="inputPassword"
                className="visually-hidden"
              ></label>
              <input
                type="email"
                name="email"
                className="form-control mt-3"
                placeholder="Password"
                value={newContact.email}
                onChange={handleChange}
              />
              <button
                className=" button mt-4 p-1 w-100   btn btn-sm btn-success"
                type="submit"
              >
                Add Contact
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddContact;

// value={newContact.name ?? ""}
