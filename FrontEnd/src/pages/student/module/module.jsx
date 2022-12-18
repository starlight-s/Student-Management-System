import React, { useEffect, useState } from "react";
import AllAPI from "../../../component/API/AllAPI";
import "./module.css";

function Modulep() {
  const [prn, setPrn] = useState(localStorage.getItem("prn"))
  const [moduleData, setModuleData] = useState([])

  const getStudentModule = (e) => {
    let data = [];
    let allApi = new AllAPI();
    allApi.getStudentModule(e).then((response) => response.json())
      .then((response) => {
        console.log(response)
        response.forEach((a) => {
          data.push({
            name: a.subject.subjectName,
            labmarks: a.labExam,
            internalmarks: a.internal,
            cceemarks: a.ccee,
            total: a.internal + a.ccee + a.internal
          })
        })
        setModuleData(data)
      })
  }
  useEffect(() => {
    getStudentModule(prn)

  }, []);

  return (
    <>
      <div className="module_data">
        <div className="module_container">
          {moduleData.map((Module) => (
            <div className="module_wrapper">
              <div className="module_namewrapper">
                <h6 className="module_subjecthead">subject</h6>
                <h1 className="module_subjectname">{Module.name}</h1>
              </div>
              <div className="module_markswrapper">
                <div className="module_innerwrapper1">
                  {/* <h4>Date</h4>
                  <h4>Exam Date</h4> */}
                  <hr />
                  <h4>Lab Exam Marks</h4>
                  <h4> Internal Marks</h4>
                  <h4> CCEE Marks</h4>
                  <hr />
                  <h4> Total Marks</h4>
                </div>
                <div className="module_innerwrapper1">
                  {/* <h4 className="module_info">{Module.moduledate}</h4>
                  <h4 className="module_info">{Module.examdate}</h4> */}
                  <hr />
                  <h4 className="module_info">{Module.labmarks}</h4>
                  <h4 className="module_info">{Module.internalmarks}</h4>
                  <h4 className="module_info">{Module.cceemarks}</h4>
                  <hr />
                  <h4 className="module_info">{Module.total}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Modulep;
