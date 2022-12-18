package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.DAO.CourseDAO;
import com.app.DAO.SubjectDAO;
import com.app.model.Course;
import com.app.model.Subject;

@RestController
@CrossOrigin("*")
public class AllDataController {
	
	@Autowired
    private CourseDAO courseDAO;
	
	@Autowired
    private SubjectDAO subjectDAO;
	
	@GetMapping("/allcourses")
    public List<Course> getAllCourses() {
        return this.courseDAO.findAll();
    }
	
	@GetMapping("/allsubjects")
    public List<Subject> getAllSubjects() {
        return this.subjectDAO.findAll();
    }
	
	@GetMapping("/subjectsbycourse/{course_id}")
    public List<Subject> getSubjectsByCourse(@PathVariable("course_id") int course_id) {
		Course c = courseDAO.findByCourseId(course_id);
        return this.subjectDAO.findByCourse(c);
    }
}
