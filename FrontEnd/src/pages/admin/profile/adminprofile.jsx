import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./adminprofile.css";
import image from "./boy.png";
import { useNavigate } from "react-router-dom";


const details = {
name: "Uma",
Emp_id: "20004",
 Designation: "Technican",
email: "uma@acts.com",
phoneno: "+91+7720025484",
};

const AdminProfile = ({sendprn}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState(details.email);
  const [phoneno, setPhoneNo] = useState(details.phoneno);
  const [fetchDetails, setfetchDetails] = useState([]);
  //console.log("pnrget"+sendprn);
//const Emp_id = sendEmp_id;
const navigate = useNavigate();


useEffect( ()=>{
  const getfetchDetails = async ()=>{ 
    const res = await fetch("http://localhost:8080/getadmin/"+sendprn);
    const getcon = await res.json();
    //console.log("Inside AdminProfile  "+getcon);
    //console.log(getcon);
    setfetchDetails(await getcon);
    //console.log("Emp_id==="+sendEmp_id);
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
    setPhoneNo(event.target.value);
  };

  const SaveHandler = () => {
    setIsEdit(false);
    //API call
  };
  return (
    <>
      <div className="container_profile">
        <img className="profile" src={image} alt="" />
        <div>
          <div className="details">
            <h4 className="heading_profile">Admin Name</h4>{" "}
            <div className="profile_span">{fetchDetails.name}</div>
          </div>
          <hr />

          <div className="details-pnr">
            <h4 className="heading_profile">Emp Code</h4>
            <div className="profile_span">{fetchDetails.admin_id}</div>
          </div>
          <hr />
          <div className="details">
            <h4 className="heading_profile">Designation</h4>
            <div className="profile_span">{fetchDetails.designation}</div>
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
            {!isEdit && <div className="profile_span">{fetchDetails.phoneNo}</div>}
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
      </div>
    </>
  );
};

export default AdminProfile;