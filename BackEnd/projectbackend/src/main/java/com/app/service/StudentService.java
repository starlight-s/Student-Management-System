package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.DAO.StudentDAO;
import com.app.model.ModulePerformance;
import com.app.model.Student;
import com.app.model.StudentStatus;



@Transactional
@Service
public class StudentService {

	@Autowired
	private StudentDAO studentDao;
	
	
	//Show Details to a particular student using his/her PRN
	public Optional<Student> SingleSelect(long PRN)
	{
		Optional<Student> b=null;
		if(studentDao.existsById(PRN))
		{
			b=studentDao.findById(PRN);
		}else
		{
			System.out.println("this id dosen't exists");
		}
		return b;
	}
	
	public ResponseEntity<?> updateStudent(long prn,String email,String address,long mobile)
	{
//		StudentStatus studentStatus = new StudentStatus(0,"Update Failed",updatedstudent);
//		if(studentDao.findByPrn(prn)!=null)
//		{
//			studentDao.save(updatedstudent);
//			studentStatus.setStatuscode(1);
//			studentStatus.setMsg("update Succesfull");
//		}
		if(studentDao.existsById(prn))
		{
			Student s = studentDao.findByPrn(prn);
			s.setEmail(email);
			s.setAddress(address);
			s.setMobileNo(mobile);
			studentDao.save(s);	
			return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Upadate Failed");
	}
	
	public Student studentLogin(String email, String password) {
		System.out.println("Email check: " +email);
		System.out.println("Pass check: "+ password );
		
		Student s = studentDao.findByEmailAndPassword(email.trim(), password.trim());
		if(s != null) {
			return s;
		}else {
			System.out.println("Enter valid username and password");
		}
		
		
		return null;
	}
	
	
//	public StudentStatus deleteStudent(long id)
//	{
//		StudentStatus studentStatus = new StudentStatus(0,"delete failed",new Student(0,"n",null, null, null, null, 0, 0));
//		if(studentDao.existsById(id))
//		{
//			studentDao.deleteById(id);
//			studentStatus.setStatuscode(1);
//			studentStatus.setMsg("Deleted Successfully");
//		}
//		return studentStatus;
//	}
	
	
	
	
}
