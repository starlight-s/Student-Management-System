import React from "react";
import logo from "./logo.jpg";
import Img from "./boy.png";
import sign from "./new.png";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IdCSS from "./Id.module.css";
const Studentinfo = [
  {
    Name: "___________________",
    PRN: "____________________",
    Course: "__________________",
    DateIsse: "_____________",
    Valid: "_______________",
    img: Img,
  },
];

const Idcard = () => {
  return (
    <>
<Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '100px',
        }}
      >
        <Paper elevation={24} >
    <div className={IdCSS.container}>
      <div className={IdCSS.containertop}>
        <div className={IdCSS.heading}>
          <h4>CENTRE FOR DEVELOPMENT OF ADVANCED COMPUTING</h4>
          <h6>
            (A Scientific Society of the Ministry of Electronic and information
            Technology,Government of India)
          </h6>
        </div>
        <div className={IdCSS.logo}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={IdCSS.midsection}>
        <h4>Advanced Computing Traning School(ACTS)-Bangalore</h4>
        <h6>
          #1,Old Mandras Road,Opp : HAL Aero Engine Division,Byappanashalli
          P.O,Bengalure-560038
        </h6>

        <h6>
          <span>Phone:</span> 080-1234567 <span>Email:</span> actsb@cdac.in
          <span> Website:</span> acts.cdac.in
        </h6>
      </div>
      <h1 className={IdCSS.title}>Student ID</h1>
      <div className={IdCSS.containerbottom}>
        <div className={IdCSS.stdetails}>
          <h5>
            Name:- <span>{Studentinfo[0].Name}</span>
          </h5>
          <h5>
            PRN:- <span>{Studentinfo[0].PRN}</span>
          </h5>
          <h5>
            Course:- <span>{Studentinfo[0].Course}</span>
          </h5>
          <h5>
            Date of Issue:- <span>{Studentinfo[0].DateIsse}</span>
          </h5>
          <h5>
            Valid upto:- <span>{Studentinfo[0].Valid}</span>
          </h5>
          <h6 className={IdCSS.sign}>Signature</h6>
        </div>
        <div className={IdCSS.imgsection}>
          <img className={IdCSS.photo} src={Studentinfo[0].img} alt="" />
          <div>
            <img src={sign} alt="" className={IdCSS.signhead} />
            <h6 className={IdCSS.headsign}>Head-Acts</h6>
          </div>
        </div>
      </div>
    </div>
    </Paper>
    </Box>

    </>
  );
};

export default Idcard;
