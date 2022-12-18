import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./attendance.css";
import data from "./datamodule.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AttendanceAPI from "../../../component/API/AttendanceAPI";

const Attendanceadmin = () => {

  const [excel, setExcel] = React.useState(false);
  const handlerChange = (event) => {
    let regexForFile = '.*\.(xlsx|xlsm)'
    if (new RegExp(regexForFile).test(event.target.files[0].name)) {

      setExcel(event.target.files[0])
    }
    else {
      window.alert("Please Upload a .xlsx or .xlsm file ")
    }
  }

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    file: "",
  });

  const [editFormData, setEditFormData] = useState({
    course: "",
    module: "",
    file: "",
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

  const getTableAttendance = () => {
    let allTableData = [];
    let attendanceAPI = new AttendanceAPI();
    attendanceAPI.getTableAttendanceFile().then((response) => response.json())
      .then((response) => {
        (console.log(response))
        response.forEach((a) => {
          allTableData.push({
            course: a.courseName,
            module: a.subjectName,
            date:a.date,
          });
        })
        setContacts(allTableData)
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

      course: addFormData.course,
      module: addFormData.module,
      file: addFormData.file,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,

      course: editFormData.course,
      module: editFormData.module,
      file: editFormData.file,
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
      course: contact.course,
      module: contact.module,
      file: contact.file,
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
    getTableAttendance()
  }, []);
  // ***********************body*********************
  const uploadAttendance = async (data) => {
    let formData = new FormData();
    formData.append('file', excel);
    let attendanceAPI = new AttendanceAPI();
    await attendanceAPI.uploadAttendanceFile(formData).then((response) => { 
      window.alert("Student data uploaded successfully.")
      if (response.status === 200) {
      getTableAttendance()
    }
  })
  }

  return (
    <body className="adminattendance_body">
      <div className="adminattendance_container">
        <h2 className="adminattendance_heading">Attendance</h2>
        <form onSubmit={handleAddFormSubmit} className="admin_form">
          <input
            className="adminattendance_input"
            type="file"
            name="file"
            required="required"
            onChange={handlerChange}
            accept=".xlsx,.xlsm"
          />
          <button className="adminattendance_buttonadd" type="submit" onClick={uploadAttendance}>
            Add
          </button>
        </form>
        {/*----------------- table------------------*/}
        <form onSubmit={handleEditFormSubmit}>
          <table className="adminattendance_table">
            <tr>
              <th className="adminattendance_head">Course</th>
              <th className="adminattendance_head">Module</th>
              <th className="adminattendance_head">Date</th>
            </tr>

            <tbody className="adminattendance_body">
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

export default Attendanceadmin;