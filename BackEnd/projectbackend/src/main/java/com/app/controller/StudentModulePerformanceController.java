package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.StudentModulePerformanceService;
import com.app.DAO.SubjectDAO;
import com.app.model.ModulePerformance;

@RestController
@CrossOrigin("*")
public class StudentModulePerformanceController {
	@Autowired
    private StudentModulePerformanceService studentModulePerformanceService;
		
	@GetMapping("/student/moduleperformance/{prn}")
    public List<ModulePerformance> getAllPerfromanc(@PathVariable long prn) {
     return this.studentModulePerformanceService.getModulePerformanceData(prn);
    }	
}
