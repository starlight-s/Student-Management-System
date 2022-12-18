package com.app.controller;

import java.util.List;


//import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.helper.MysqlHelper;
import com.app.model.Attendance;
import com.app.service.AttendanceService;


@RestController
@CrossOrigin("*")

public class AttendanceController 
{
	@Autowired
	private AttendanceService attendanceService;
	
	@PostMapping("/admin/attendance/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file)
	{
		if(MysqlHelper.checkExcelFormat(file))
		{
			this.attendanceService.save(file);
			
			return ResponseEntity.status(HttpStatus.OK).body("Uploaded the file successfully");
					//ok(Map.of("message", "File is uploaded and data is saved in database"));
					//ResponseEntity.ok(Map.Entry<"message", "File is uploaded and data is saved in database">);
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload Excel file");
		
	}
	
	@GetMapping("/admin/attendance")
	public List<Attendance> getallattendance()
	{
		return this.attendanceService.getAllAttendance();
		
	}
	//----------------------------------------------------------------
	
	
//	@PutMapping("/admin/attendance/update")
//	public ResponseEntity<?> update(@RequestBody Attendance a)
//	{
//		return attendanceService.updateAttendance(a);
//	}
	
	@GetMapping("/student/attendance/{prn}")
    public List<Attendance> getAllAttendance1(@PathVariable long prn) {
     return this.attendanceService.getAttendance(prn);
    }

}
