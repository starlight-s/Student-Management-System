import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <select
          className="adminmodule_select "
          name="course"
          value={editFormData.course}
          onchange={handleEditFormChange}
        >
          <option value="PG-DAC">PG-DAC</option>
          <option value="PG-DBDA">PG-DBDA</option>
          <option value="PG-DESD">PG-DESD</option>
        </select>
      </td>
      <td>
        <select
          className="adminmodule_select "
          name="module"
          value={editFormData.module}
          onchange={handleEditFormChange}
        >
          <option value="" disabled selected>
            Select Course
          </option>
          <option value="Java">Java</option>
          <option value="Advance java">Advance java</option>
          <option value="DBMS">DBMS</option>
        </select>
      </td>

      <td>
        <button className="adminmodule_buttonsavebody" type="submit">
          Save
        </button>
        <button
          className="adminmodule_buttoncancelbody"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
