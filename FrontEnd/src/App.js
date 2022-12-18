import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Profile from "./pages/student/profile/profile";
import AdminProfile from "./pages/admin/profile/adminprofile";
import AdminAttendance from "./pages/admin/attendance/attendance"
import Attendance from "./pages/student/attendance/attendance";
import Notice from "./pages/student/notice/notice";
import AdminNotice from "./pages/admin/notice/notice";
import Idcard from "./pages/student/idcard/id";
import Upload from "./pages/admin/updatedata/uplaod";
import Module from "./pages/student/module/module";
import AdminModule from "./pages/admin/module/module";
import Enquiry from "./pages/student/enquiry/enquiry";
import AdminEnquiry from "./pages/admin/enquiry/enquiry";
import Login from "./pages/login/login";
const App = () => {

  const [isAdmin, setIsAdmin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [sendprn, setSendprn] = useState();

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') ? true : false)
  }, [isLogin])

  const loginHandler = () => {
    setIsLogin(true);
  }

  const logoutHandler = () => {
    setIsLogin(false)
  }

  return (
    <>
      <div> 
        <BrowserRouter>
          <Navbar isAdmin={isAdmin} isLogin={isLogin} logout={logoutHandler}/>
          <Routes>
            {!isLogin && (<Route path="/" element={<Login setSendprn={setSendprn} login={loginHandler}/>}/>)}
            {<Route path="/profile" element={<Profile sendprn={sendprn}/>}/>}
            {<Route path="/adminprofile" element={<AdminProfile sendprn={sendprn}/>}/>}
            {!isAdmin && <Route path="/profile" element={<Profile />} /> }
            {isAdmin && <Route path="/adminprofile" element={<AdminProfile />} /> }
            {!isAdmin && <Route path="/notice" element={<Notice />} /> }
            {isAdmin && <Route path="/notice" element={<AdminNotice />} /> }
            {isAdmin && (
              <Route path="/attendance" element={<AdminAttendance />} />
            )}
            {!isAdmin && <Route path="/attendance" element={<Attendance />} />}
            {!isAdmin && <Route path="/idcard" element={<Idcard />} />}
            {!isAdmin && <Route path="/module" element={<Module />} />}
            {isAdmin && <Route path="/module" element={<AdminModule />} />}
            {!isAdmin && <Route path="/enquiry" element={<Enquiry />} />}
            {isAdmin && <Route path="/enquiry" element={<AdminEnquiry />} />}
            {isAdmin && <Route path="/upload" element={<Upload />} />}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;