import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "./enquiry.css";
import Img_en from "./getintouch.jpg";

function Enquiry() {
  return (
    <>
      <div className="encontainer">
        <div className="enimg">
          <img className="img_en" src={Img_en} alt="" />
        </div>
        <div className="enwrapper">
          <h1 className="enheading">Get in touch</h1>
          <div className="eninnercon">
            <TextField id="outlined-basic" className="input_field" label="Name" variant="outlined" />
            <TextField id="outlined-basic" className="input_field" label="PRN" variant="outlined" />
            <TextField id="outlined-basic" className="input_field" label="Email" variant="outlined" />
            <TextField id="outlined-basic" className="input_field" label="Contact Number" variant="outlined" />
            <TextField
              id="outlined-select-currency"
              select
              className="input_field"
              label="Issue"
            >
              <MenuItem>Document</MenuItem>
              <MenuItem>Fees</MenuItem>
              <MenuItem>Other</MenuItem>
            </TextField>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              className="input_field"
              defaultValue="Issue"
            />
            <Button variant="contained">Send</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
