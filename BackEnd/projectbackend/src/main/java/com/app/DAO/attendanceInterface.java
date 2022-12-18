package com.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Attendance;

public interface attendanceInterface extends JpaRepository<Attendance,Integer>{

//List<Attendance> findByPrn(int prn);
	
	List<Attendance> findBysubjectName(String subjectName);

	List<Attendance> findByprn(long prn);


	

}
