import React from "react";

const ContactCard = ({ contact, deleteContact }) => {
  const { id, name, email } = contact;
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td>
            <button onClick={() => deleteContact(id)}>delete</button>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default ContactCard;
