import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./profile.css";
import image from "./boy.png";
import { useNavigate } from "react-router-dom";

const details = {
  name: "Tejas sachin chaudhari",
  pnr: "220350120107",
  course: "PG-DAC-MAR-2022",
  collegename: "KP-BLR",
  email: "tejasrk08@gmail.com",
  phoneno: "+91+7720025484",
};

const Profile = ({sendprn}) => {
 
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState(details.email);
  const [phoneno, setPhoneno] = useState(details.phoneno);
  const [fetchDetails, setfetchDetails] = useState([]);
  //console.log("pnrget"+sendprn);
  const prn = sendprn;
  const navigate = useNavigate();

  useEffect( ()=>{
    const getfetchDetails = async ()=>{
      const res = await fetch("http://localhost:8080/student/"+prn);
      const getcon = await res.json();
      //console.log(getcon);
      setfetchDetails(await getcon);
      //console.log("pnrget==="+sendprn);

    }

    getfetchDetails();

  },[]);

  const EditHandler = () => {
    setIsEdit(true);
  };

  const cancelHandler = () => {
    setIsEdit(false);
  };

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PhoneHandler = (event) => {
    setPhoneno(event.target.value);
  };

  const SaveHandler = () => {
    setIsEdit(false);
    //API call
  };

  return (
    <>
      <div className="container_profile">
      {/*<button type="button" onClick={logout}>Logout</button>*/}
        <img className="profile" src={image} alt="" />
        <div>
          <div className="details">
            <h4 className="heading_profile">Name</h4>{" "}
            <div className="profile_span">{fetchDetails.name}</div>
          </div>
          <hr />

          <div className="details-pnr">
            <h4 className="heading_profile">PNR</h4>
            <div className="profile_span">{fetchDetails.prn}</div>
          </div>
          <hr />
          <div className="details">
            <h4 className="heading_profile">Course</h4>
            <div className="profile_span">{details.course}</div>
          </div>
          <hr />
          <div className="details">
            <h4 className="heading_profile">Email</h4>
            {!isEdit && <div className="profile_span">{fetchDetails.email}</div>}
            {isEdit && (
              <div className="profile_span">
                <input type="text" value={email} onChange={EmailHandler} />
              </div>
            )}
          </div>
          <hr />
          <div className="details">
            <h4 className="heading_profile">Phone Number</h4>
            {!isEdit && <div className="profile_span">{fetchDetails.mobileNo}</div>}
            {isEdit && (
              <div className="profile_span">
                <input type="text" value={phoneno} onChange={PhoneHandler} />
              </div>
            )}
          </div>
          <hr />
          {/* <div className="edit-btn">
            {isEdit && (
              <div className="save-cancel-btn">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    margin: "auto",
                    backgroundColor: "#D3FFCC",
                    color: "black",
                  }}
                  onClick={SaveHandler}
                >
                  Save
                </Button>
                <Button
                  size="small"
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#FFC1C1",
                    display: "flex",
                    margin: "auto",
                    color: "black",
                  }}
                  variant="contained"
                  onClick={cancelHandler}
                >
                  Cancel
                </Button>
              </div>
            )}
            {!isEdit && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  textAlign: "center",
                  backgroundColor: "#FFD1C8",
                  display: "flex",
                  margin: "auto",
                  color: "black",
                }}
                endIcon={<EditIcon />}
                onClick={EditHandler}
              >
                Edit
              </Button>
            )}
          </div> */}
        </div>
      {/* ) */}
      </div>
    </>
  );
};

export default Profile;