import React from 'react';


class AdminNoticeAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  async uploadNoticeFile(data) {
    return await fetch(`${process.env.REACT_APP_URL}/admin/addnotice`,
      {
        "method": 'POST',
        "headers": {
          accept: "application/json",
          "access-Control-Allow-Origin": "*"
        },
        "body": data
      })
  }
  async getAllNoticeCourses() {
    return await fetch(`${process.env.REACT_APP_URL}/allcourses`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
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
}
export default AdminNoticeAPI;