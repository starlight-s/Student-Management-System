import React, { useEffect, useState } from "react";
import "./upload.css";
import AllAPI from "../../../component/API/AllAPI" 
function Upload() {
  const Optiondata = ["dac", "dbda", "desd"],
    CourseOption = function (x) {
      return <option>{x}</option>;
    };
    const [allCourses, setAllCourses] = useState([]);
    const [courseId, setCourseId] = useState(null);

    const getUpload = () => {
      let allAdminCourses = [];
      let allAPI = new AllAPI();
      allAPI.getUpload().then((response) => response.json())
        .then((response) => {
          response.forEach((a) => {
            allAdminCourses.push({
              id: a.courseId,
              name: a.courseName
            });
            console.log(courseId)
          })
          setAllCourses(allAdminCourses)
        }
        );
    }
    
  const handleSubjectChange = (event) => {
    setCourseId(event)
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
  const uploadStudentFile = async () => {
    let formData = new FormData();
    formData.append('file', excel);
    let allAPI = new AllAPI();
    await allAPI.uploadStudentFile(courseId,formData).then((response) => {
      window.alert("Student data uploaded successfully.")
      
    })
  }
    useEffect(() => {
      getUpload()
      
    }, []);
  return (
    <>
      <div className="upload_container">
        <select name="" id="" onChange={(e) => handleSubjectChange(e.target.value)} className="upload_select" >
        <option value="" disabled selected>
              Select Course
            </option>
            {allCourses.map((a) => (
              <option value={a.id} >
                {a.name}
              </option>))}
        </select>

        <input type="file" name="" id="" className="upload_input" onChange={handleChange}
            accept=".xlsx,.xlsm "/>
        <button formAction="submit" className="upload_btn" onClick={uploadStudentFile}>
          upload
        </button>
      </div>
    </>
  );
}

export default Upload;