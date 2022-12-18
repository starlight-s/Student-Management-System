import React from 'react';


class AllAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  // student data from excel file
  async getUpload() {
    return await fetch(`${process.env.REACT_APP_URL}/allcourses`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }
  async uploadStudentFile(course_id,data) {
    return await fetch(`${process.env.REACT_APP_URL}/admin/studentDeatils/upload/${course_id}`,
      {
        "method": 'POST',
        "headers": {
          accept: "application/json",
          "access-Control-Allow-Origin": "*"
        },
        "body": data
})
  }


  async getAllCourses() {
    return await fetch(`${process.env.REACT_APP_URL}/allcourses`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }

  async getModule(course_id) {
    return await fetch(`${process.env.REACT_APP_URL}/subjectsbycourse/${course_id}`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }
  async getTableModule() {
    return await fetch(`${process.env.REACT_APP_URL}/admin/moduleperformance`,
      {
        "method": 'GET',
        "headers": {
          'cache-control': 'no-cache',
          'Connection': 'keep-alive'
        }
      })
  }
  async uploadModulePerformanceFile(subject_id,data) {
    return await fetch(`${process.env.REACT_APP_URL}/admin/moduleperformance/upload/${subject_id}`,
      {
        "method": 'POST',
        "headers": {
          accept: "application/json",
          "access-Control-Allow-Origin": "*"
        },
        "body": data
})
  }
 async deleteModulePerformanceFile(subject_id) {
  return await fetch(`${process.env.REACT_APP_URL}/admin/deletemoduleperformance/${subject_id}`,
    {
      "method": 'DELETE',

    },
  )
}
async getStudentModule(prn) {
  return await fetch(`${process.env.REACT_APP_URL}/student/moduleperformance/${prn}`,
    {
      "method": 'GET',
      "headers": {
        'cache-control': 'no-cache',
        'Connection': 'keep-alive'
      }
    })
}
}
export default AllAPI;