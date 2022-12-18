package com.app.service;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.DAO.AdminStudentProfileDao;
import com.app.DAO.CourseDAO;
import com.app.DAO.StudentDAO;
import com.app.helper.HelperStudentProfile;
import com.app.model.Student;
import com.app.model.StudentStatus;




@Transactional
@Service
public class AdminStudentProfileService {

	@Autowired
	private StudentDAO studentDAO;
	
	@Autowired
	private CourseDAO courseDAO;

    public void save(int course_id,MultipartFile file) {

        try {
            List<Student> student = HelperStudentProfile.convertExcelToListOfStudents(course_id,file.getInputStream(),courseDAO);
            this.studentDAO.saveAll(student);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
	
	//List of students
	public List<Student> getAll(){
		return studentDAO.findAll();
	}
	
	
	//Update details of a student using his/her PRN
//	public StudentStatus updateStudent(Student updatedstudent)
//	{
//		StudentStatus studentStatus = new StudentStatus(0,"Update Failed",updatedstudent);
//		if(studentDAO.existsById(updatedstudent.getPrn()))
//		{
//			studentDAO.save(updatedstudent);
//			studentStatus.setStatuscode(1);
//			studentStatus.setMsg("update Succesfull");
//		}
//		return studentStatus;
//	}
	

}
