package com.app.controller;

import java.util.List;

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

import com.app.helper.HelperStudentProfile;
import com.app.model.Student;
import com.app.model.StudentStatus;
import com.app.service.AdminStudentProfileService;


@CrossOrigin(origins="*")
@RestController
public class AdminStudentProfileController {

	@Autowired
	private AdminStudentProfileService adminService;
	
	// Student data form excel file to database.
		
	//Excel to Database
    @PostMapping("/admin/studentDeatils/upload/{course_id}")
    public ResponseEntity<?> upload(@PathVariable int course_id ,@RequestParam("file") MultipartFile file) {
        if (HelperStudentProfile.checkExcelFormat(file)) {
            //true

            this.adminService.save(course_id,file);

            return ResponseEntity.status(HttpStatus.OK).body("Uploaded the file successfully");


        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
    }
	
    
    //List of all students
	@GetMapping("/admin/students")
	public List<Student> multiselect()
	{
		return adminService.getAll();
	}
	
	//Update a student
//	@PutMapping("/AUpdStu")
//	public StudentStatus UpdStudent(@RequestBody Student updatedStudent)
//	{
//		return adminService.updateStudent(updatedStudent);
//	}
	
}
