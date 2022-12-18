import React from "react";
import "./module.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="adminnotice_row">
      <td>{contact.prn}</td>
      <td>{contact.course}</td>
      <td>{contact.module}</td>
      <td>{contact.ccee}</td>
      <td>{contact.internalexam}</td>
      <td>{contact.labexam}</td>
    </tr>
  );
};

export default ReadOnlyRow;
