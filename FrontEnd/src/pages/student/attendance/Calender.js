import { Stack } from '@mui/material';
import React from 'react'
import CardDate from './CardDate'

const Calender = (props) => {

    const days = new Date(props.date.year, props.date.month, 0).getDate();
    const dataFliterByPrn = props.attendanceData.filter((data) => data.prn === props.prn)
    if(dataFliterByPrn.length === 0) {
        return null;
    }
    const attendanceForMonth = dataFliterByPrn[0].attendance.filter((data) => {
        return (data.date.getMonth()  + 1) === props.date.month && (data.date.getYear() + 1900) === props.date.year;
    })

    const dates = []
    for(let i = 0; i < days; i++) {
        if(i % 7 === 0) {
            dates.push(<br/>)
        }
        let attendanceForDate = attendanceForMonth.filter((data) => {
            return (data.date.getDate() === i + 1)
        })
      /*  console.log("fjadskfjaskl", i + 1, attendanceForDate)*/
        if(attendanceForDate.length === 0) {    
            dates.push(
                <CardDate bgColor='white' borderColor='black' dateNumber={i + 1} decision='No status'/>
            )
        } else {
            if(attendanceForDate[0].present) {
                dates.push(
                    <CardDate bgColor='#D7FFD6' borderColor='#6CD967' dateNumber={i + 1} decision='Present'/>
                )
            } else {
                dates.push(
                    <CardDate bgColor='#FFD7D7' borderColor='#E19595' dateNumber={i + 1} decision='Absent'/>
                )
            }
        }
        

    }

    return (
        <div>
            {dates.length !== 0 && dates}
        </div>
    )
}

export default Calender;