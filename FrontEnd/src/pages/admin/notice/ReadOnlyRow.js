import React from "react";
import "./notice.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="adminnotice_row">
      <td>{contact.date}</td>
      <td>{contact.course}</td>
      <td>{contact.notice}</td>
    </tr>
  );
};

export default ReadOnlyRow;
