import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="adminnotice_input"
          type="date"
          required="required"
          placeholder="Enter a name..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          className="adminnotice_select "
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
        <input
          className="adminnotice_input"
          type="text"
          required="required"
          placeholder="Enter an Notice..."
          name="notice"
          value={editFormData.notice}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button className="adminnotice_buttonsavebody" type="submit">
          Save
        </button>
        <button
          className="adminnotice_buttoncancelbody"
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
