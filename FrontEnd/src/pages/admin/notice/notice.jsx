import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./notice.css";
import data from "./data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AdminNoticeAPI from "../../../component/API/AdminNoticeAPI";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    date: "",
    notice: "",
    course: "",
  });
  const [allnoticeCourses, setAllNoticeCourses] = useState([]);
  const [editFormData, setEditFormData] = useState({
    date: "",
    notice: "",
    course: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const getAllCourses = () => {
    let allAdminCourses = [];
    let adminnoticeAPI = new AdminNoticeAPI();
    adminnoticeAPI.getAllNoticeCourses().then((response) => response.json())
      .then((response) => {
        response.forEach((a) => {
          allAdminCourses.push({
            id: a.courseId,
            name: a.courseName
          });
        })
        setAllNoticeCourses(allAdminCourses)
      }
      );
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      date: addFormData.date,
      notice: addFormData.notice,
      course: addFormData.course,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      date: editFormData.date,
      notice: editFormData.notice,
      course: editFormData.course,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      date: contact.date,
      notice: contact.notice,
      course: contact.course,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  useEffect(() => {
    getAllCourses()
  }, []);
  // ***********************body*********************
  return (
    <body className="adminotice_body">
      <div className="adminnotice_container">
        <h2 className="adminnotice_heading">Notice</h2>
        <form onSubmit={handleAddFormSubmit} className="admin_form">
          <select
            required="required"
            name="course"
            onChange={handleAddFormChange}
            className="adminnotice_select"
          >
            <option value="" disabled selected>
              Select Course
            </option>
            {allnoticeCourses.map((a) => (
              <option value={a.name} >
                {a.name}
              </option>))}
          </select>
          <input
            className="adminnotice_input"
            type="date"
            name="date"
            required="required"
            placeholder="Enter a Date"
            onChange={handleAddFormChange}
          />
          <input
            className="adminnotice_input"
            type="text"
            name="notice"
            required="required"
            placeholder="Enter an Notice"
            onChange={handleAddFormChange}
          />
          <button className="adminnotice_buttonadd" type="submit">
            Add
          </button>
        </form>
        {/*----------------- table------------------*/}
        <form onSubmit={handleEditFormSubmit}>
          <table className="adminnotice_table">
            <tr>
              <th className="adminnotice_head">Date</th>
              <th className="adminnotice_head">Course</th>
              <th className="adminnotice_head">Notice</th>
            </tr>

            <tbody className="adminnotice_body">
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </body>
  );
};

export default App;
