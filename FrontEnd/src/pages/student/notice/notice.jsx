import React from "react";

import "./notice.css";

const Ndata = [
  {
    subject: "Core java exam",
    link: "https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/",
  },
  {
    subject: "Advance Java exam",
    link: "https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/",
  },
  {
    subject: "Database technology exam",
    link: "https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/",
  },
  {
    subject: "ASP.NET exam",
    link: "https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/",
  },
  {
    subject: " Operating System exam",
    link: "https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/",
  },
];

function Notice() {
  return (
    <div className="notice_container_student">
      <div className="notice_wrapper">
        <table className="notice_table">
          <tr className="notice_row">
            <th className="notice_heading">Title</th>
            <th className="notice_heading">Link</th>
          </tr>
          {Ndata.map((val, key) => {
            return (
              <tr className="notice_row" key={key}>
                <td className="notice_data_student">{val.subject}</td>
                <td className="notice_data_student">
                  <a className="link_notice" href={val.link}>
                    {val.link}
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Notice;
