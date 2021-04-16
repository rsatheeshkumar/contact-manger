import React from "react";
import { Link } from "react-router-dom";
import { BiMessageSquareEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

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
            <Link to={{ pathname: `/edit${id}`, state: { contact: contact } }}>
              <BiMessageSquareEdit size="25" color="green" />
            </Link>
          </td>
          <td>
            <Link to="#" onClick={() => deleteContact(id)}>
              <AiFillDelete size="25" color="red" />
            </Link>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default ContactCard;
