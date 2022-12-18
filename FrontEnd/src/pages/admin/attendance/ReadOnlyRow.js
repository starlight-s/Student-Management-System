import React from "react";
import "./attendance.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="adminnotice_row">
      <td>{contact.course}</td>
      <td>{contact.module}</td>
      <td>{contact.date}</td>
    </tr>
  );
};

export default ReadOnlyRow;
