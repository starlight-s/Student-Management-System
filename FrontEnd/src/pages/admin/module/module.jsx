import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./module.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AllAPI from "../../../component/API/AllAPI"

const Moduleadmin = () => {
  const [contacts, setContacts] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allSubject, setAllSubject] = useState([]);
  const [addFormData, setAddFormData] = useState({
    course: "",
    module: "",
    file: "",
  });
  const [editFormData, setEditFormData] = useState({
    course: "",
    module: "",
    file: "",
  });
  /*******************course*/
  const getAllCourses = () => {
    let allAdminCourses = [];
    let allAPI = new AllAPI();
    allAPI.getAllCourses().then((response) => response.json())
      .then((response) => {
        response.forEach((a) => {
          allAdminCourses.push({
            id: a.courseId,
            name: a.courseName
          });
        })
        setAllCourses(allAdminCourses)
      }
      );
  }
/******Delete course */
  const getDeleteCourses = () => {
    let allAPI = new AllAPI();
    allAPI.deleteModulePerformanceFile(subjectId).then((response) => {
      window.alert("Module performance data deleted successfully.")
      if (response.status === 200) {
        getTable()
      }
    })
  }


  const getTable = () => {
    let allTableData = [];
    let allAPI = new AllAPI();
    allAPI.getTableModule().then((response) => response.json())
      .then((response) => {
        (console.log(response))
        response.forEach((a) => {
          allTableData.push({
            course: a.subject.course.courseName,
            module: a.subject.subjectName,
            prn: a.student.prn,
            labexam: a.labExam,
            ccee: a.ccee,
            internalexam: a.internal
          });
        })
        setContacts(allTableData)
      }
      );
  }

  const [editContactId, setEditContactId] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleCourseChange = (event) => {
    console.log(event);
    setCourseId(event)
    getSubjectbyCourses(event)
  };
  /*******************subject*/
  const getSubjectbyCourses = (e) => {
    let allAdminSubject = [];
    let allAPI = new AllAPI();
    allAPI.getModule(e).then((response) => response.json())
      .then((response) => {
        response.forEach((a) => {
          allAdminSubject.push({
            id: a.subjectId,
            name: a.subjectName,
             });
        })
        setAllSubject(allAdminSubject)
      }
      );

  }

  const handleSubjectChange = (event) => {
    setSubjectId(event)
  };

  const [excel, setExcel] = React.useState(false);
    const handleChange = (event) => {
        let regexForFile = '.*\.(xlsx|xlsm)'
        if (new RegExp(regexForFile).test(event.target.files[0].name)) {

            setExcel(event.target.files[0])
        }
        else {
            window.alert("Please Upload a .xlsx or .xlsm file ")
        }
    }
  const uploadFile = async () => {
    let formData = new FormData();
    formData.append('file', excel);
    let allAPI = new AllAPI();
    await allAPI.uploadModulePerformanceFile(subjectId,formData).then((response) => {
      window.alert("Student Module performance data uploaded successfully.")
      if (response.status === 200) {
        getTable()
      }
    })
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
      prn: addFormData.prn,
      course: addFormData.course,
      module: addFormData.module
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
      prn: contact.prn,
      course: contact.course,
      module: contact.module,
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
  // ***********************body*********************
  useEffect(() => {
    getAllCourses()
    getTable()
  }, []);
  return (
    <body className="adminmodule_body">
      <div className="adminmodule_container">
        <h2 className="adminmodule_heading">Module Performance</h2>
        <form onSubmit={handleAddFormSubmit} className="admin_form">
          <select
            required="required"
            name="course"
            onChange={(e) => handleCourseChange(e.target.value)}
            className="adminmodule_select"
          >
            <option value="" disabled selected>
              Select Course
            </option>
            {allCourses.map((a) => (
              <option value={a.id} >
                {a.name}
              </option>))}
          </select>
          <select
            required="required"
            name="module"
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="adminmodule_select"
          >
            <option value="" disabled selected>
              Select Subject
            </option>
            {allSubject.map((a) => (
              <option value={a.id} >
                {a.name}
              </option>))}
          </select>
          <input
            className="adminmodule_input"
            type="file"
            name="file"
            required="required"
            onChange={handleChange}
            accept=".xlsx,.xlsm"
          />
          <button className="adminmodule_buttonadd" type="submit" onClick={uploadFile}>
            Add
          </button>
        </form>
        {/*----------------- table------------------*/}

        <div>
          <select
            required="required"
            name="course"
            onChange={(e) => handleCourseChange(e.target.value)}
            className="adminmodule_select"
          >
            <option value="" disabled selected>
              Select Course
            </option>
            {allCourses.map((a) => (
              <option value={a.id} >
                {a.name}
              </option>))}
          </select>
          <select
            required="required"
            name="module"
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="adminmodule_select"
          >
            <option value="" disabled selected>
              Select Module
            </option>
            {allSubject.map((a) => (
              <option value={a.id} >
                {a.name}
              </option>))}
          </select>

          <button className="adminmodule_buttonadd" type="submit" onClick={getDeleteCourses}>
            Delete
          </button>
        </div>

        <form onSubmit={handleEditFormSubmit}>
          <table className="adminmodule_table">
            <tr>
              <th className="adminmodule_head">prn</th>
              <th className="adminmodule_head">Course</th>
              <th className="adminmodule_head">Module</th>
              <th className="adminmodule_head">CCEE</th>
              <th className="adminmodule_head">Internal Exam</th>
              <th className="adminmodule_head">Lab exam Exam</th>
            </tr>

            <tbody className="adminmodule_body">
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

export default Moduleadmin;
