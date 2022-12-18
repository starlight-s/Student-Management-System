import { useEffect, useState } from "react";

import Calender from "./Calender";

import DateSelector from "./DateSelector";
import './attendance.css'
import AttendanceAPI from "../../../component/API/AttendanceAPI";

function Attendance() {
  const [date, setDate] = useState({});
  const [attendance, setAttendance] = useState([]);
  const [prn, setPrn] = useState(localStorage.getItem("prn"))

  const attendanceData = [
    {

      prn: prn,
      attendance: attendance
    },{},{},{},];

  const getAttendancedata = (e) => {
    var now = new Date();
    var data = [];
    
    e.forEach((a) => {
      const presentDate = new Date(a)
      data.push({
        date: presentDate,
        present: true
      })
    })

    for (var d = new Date(2020, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
      if (!e.includes(new Date(d))) {
        data.push({
          date: new Date(d),
          present: false
        })
      }
    }
    setAttendance(data)
  }
  const dateHandler = (dateFromDateSelector) => {
    setDate(dateFromDateSelector);
  };
  const getAttendancebyPrn = (e) => {
    let presentDates = [];
    let attendanceAPI = new AttendanceAPI();
    attendanceAPI.getStudentAttendanceFile(e).then((response) => response.json())
      .then((response) => {
        response.forEach((a) => {
          presentDates.push(a.date)
        })
        getAttendancedata(presentDates)
      })
  }
  useEffect(() => {
    getAttendancebyPrn(prn)

  }, []);


  return (
    <div className="Attendance">
      <DateSelector dateHandler={dateHandler} />
      <Calender date={date} attendanceData={attendanceData} prn={prn} />
    </div>
  );
}
export default Attendance;
