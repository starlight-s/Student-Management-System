package com.app.service;



import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.DAO.attendanceInterface;
import com.app.helper.MysqlHelper;
import com.app.model.Attendance;



@Service
public class AttendanceService 
{
	@Autowired
	private attendanceInterface attendanceinterface;
	public void save(MultipartFile file)
	{
		try {
			 List<Attendance> attendance = MysqlHelper.convertExcelToListOfAttendance(file.getInputStream());
			 this.attendanceinterface.saveAll(attendance);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public List<Attendance> getAllAttendance()
	{
		return  this.attendanceinterface.findAll();
		
	}
	//-------------------------------------------------------------------------
	
//	public ResponseEntity<?> updateAttendance(Attendance a) {
//		
//		if(attendanceinterface.existsById(a.getprn()))
//		{
//			//Object prn;
//			attendanceinterface.save( a);
//			return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
//		}	
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Upadate Failed");
//	}
	
	
	public List<Attendance> getAttendance(long prn)
	{
		return  this.attendanceinterface.findByprn(prn);
		
	}
	

	/*public List<Attendance> getAttendance() {
		return this.attendanceinterface.findAll();
		}*/

	
	}

	

