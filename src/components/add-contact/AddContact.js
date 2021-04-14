import { Fragment, useState } from "react";

const AddContact = ({ addContact }) => {
  const [newContact, setNewContact] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({});
  };
  return (
    <>
      <nav className="navbar navbar bg-dark text-white">
        <span className="navbar-brand mb-0 h1 d-flex justify-content-center">
          Contact Manager
        </span>
      </nav>
      <form
        className="container d-flex flex-column justify-content-center align-items-center mt-4"
        onSubmit={handleSubmit}
      >
        <div className="col-4 m-1 p-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            onChange={handleChange}
          />
        </div>
        <div className="col-4 m-1 p-3">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            onChange={handleChange}
          />
        </div>
        <button className="col-2 m-1 p-1 btn btn-primary">Add Contact</button>
      </form>
    </>
  );
};

export default AddContact;
