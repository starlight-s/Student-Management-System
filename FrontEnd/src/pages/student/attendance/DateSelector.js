import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const DateSelector = (props) => {

    const [month, setMonth] = React.useState();
    const [year, setYear] = React.useState();

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
        console.log("Month", event.target.value)
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value)
        console.log("Year", year)
    }

    const dateSubmitHandler = () => {
        console.log("Month: ", month, "Year: ", year)
        props.dateHandler({
            month,
            year
        })
    }

    return (
        <Box sx={{m: 8}}>
            
            <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="month-simple-select-label">Month</InputLabel>
                <Select
                    labelId="month-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Month"
                    onChange={handleChangeMonth}
                >
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                    <MenuItem value={4}>April</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>
                    <MenuItem value={7}>July</MenuItem>
                    <MenuItem value={8}>August</MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>October</MenuItem>
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>December</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="year-simple-select-label">Year</InputLabel>
                <Select
                    labelId="month-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Year"
                    onChange={handleChangeYear}
                >
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
                <Button variant="contained" sx={{paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, backgroundColor: 'rgb(193, 205, 255)', color: 'black'}} onClick={dateSubmitHandler}>Submit</Button>
            </FormControl>
        </Box>
    )
}

export default DateSelector;
