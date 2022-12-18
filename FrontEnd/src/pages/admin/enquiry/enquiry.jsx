import React from "react";

import "./enquiry.css";

const Ndata = [
  {
    course: "pg-dac",
    subject: "Core java exam",
    description: "problem1",
  },
  {
    course: "pg-dac",
    subject: "Advance Java exam",
    description: "problem2",
  },
  {
    course: "pg-dac",
    subject: "Database technology exam",
    description: "problem3",
  },
  {
    course: "pg-dac",
    subject: "ASP.NET exam",
    description: "problem4",
  },
  {
    course: "pg-dac",
    subject: " Operating System exam",
    description: "problem5",
  },
];

function Notice() {
  return (
    <div className="notice_container">
      <div className="notice_wrapper">
        <table className="notice_table">
          <tr className="notice_row">
            <th className="notice_heading">Course</th>

            <th className="notice_heading">Subject</th>
            <th className="notice_heading">Description</th>
          </tr>
          {Ndata.map((val, key) => {
            return (
              <tr className="notice_row" key={key}>
                <td className="notice_data">{val.course}</td>
                <td className="notice_data">
                  <a className="link_notice" href={val.subject}>
                    {val.subject}
                  </a>
                </td>
                <td className="notice_data">{val.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Notice;
