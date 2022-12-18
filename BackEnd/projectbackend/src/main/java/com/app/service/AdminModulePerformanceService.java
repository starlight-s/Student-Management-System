package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.DAO.ModulePerformanceDAO;
import com.app.DAO.StudentDAO;
import com.app.DAO.SubjectDAO;
import com.app.helper.Helper;
import com.app.model.ModulePerformance;
import com.app.model.Student;
import com.app.model.Subject;


@Service
public class AdminModulePerformanceService {
		@Autowired
	    private ModulePerformanceDAO modulePerformanceDAO;
		

		@Autowired
		private StudentDAO studentDAO;
		
		@Autowired
		private SubjectDAO subjectDAO;

	    public void save(int subject_id,MultipartFile file) {

	        try {
	            List<ModulePerformance> modulePerformance = Helper.convertExcelToListOfModulePerformance(subject_id,file.getInputStream(),studentDAO,subjectDAO);
	            this.modulePerformanceDAO.saveAll(modulePerformance);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }

	    }

	    public List<ModulePerformance> getAllData(int subject_id) {
	    	Subject sub = subjectDAO.findBySubjectId(subject_id);
	        return this.modulePerformanceDAO.findBySubject(sub);
	    }
	    
	    public ModulePerformance getOneData(int pm_id) {
	    	Subject sub = subjectDAO.findBySubjectId(pm_id);
	        return this.modulePerformanceDAO.findByPmId(pm_id);
	    }

		public ResponseEntity<?> updatemoduleperformance(int pm_id,long prn,int lab_exam,int internal,int ccee) {
			
			if(modulePerformanceDAO.existsById(pm_id))
			{
//				Subject sub = subjectDAO.findBySubjectId(subject_id);
				Student stud = studentDAO.findByPrn(prn);
				ModulePerformance mp = modulePerformanceDAO.findByPmId(pm_id);
//				mp.setSubject(sub);
				mp.setStudent(stud);
				mp.setLabExam(lab_exam);
				mp.setInternal(internal);
				mp.setCcee(ccee);
				modulePerformanceDAO.save(mp);	
				return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Upadate Failed");
		}
}
