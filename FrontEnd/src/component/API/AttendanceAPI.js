import React from 'react';


class AttendanceAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  async uploadAttendanceFile(data) {
    return await fetch(`${process.env.REACT_APP_URL}/admin/attendance/upload`,
      {
        "method": 'POST',
        "headers": {
          accept: "application/json",
          "access-Control-Allow-Origin": "*"
        },
        "body": data
      })
  }
  async getTableAttendanceFile() {
    return await fetch(`${process.env.REACT_APP_URL}/admin/attendance`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }
  async getStudentAttendanceFile(prn) {
    return await fetch(`${process.env.REACT_APP_URL}/student/attendance/${prn}`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }
}
export default AttendanceAPI;