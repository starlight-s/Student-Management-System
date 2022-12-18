package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.ModulePerformanceDAO;
import com.app.DAO.StudentDAO;
import com.app.model.ModulePerformance;
import com.app.model.Student;


@Service
public class StudentModulePerformanceService {

	@Autowired
    private ModulePerformanceDAO ModulePerformanceDAO;
	
	@Autowired
	private StudentDAO studentDAO;
	
	public List<ModulePerformance> getModulePerformanceData(long prn) {
		Student stud = studentDAO.findByPrn(prn);
		return this.ModulePerformanceDAO.findByStudent(stud);
	}

}
