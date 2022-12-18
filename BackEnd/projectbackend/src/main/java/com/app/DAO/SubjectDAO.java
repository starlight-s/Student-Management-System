package com.app.DAO;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Course;
import com.app.model.Subject;

@Repository
public interface SubjectDAO extends JpaRepository<Subject,Integer>{
	Subject findBySubjectId(int subject_id);
	
	Subject findBySubjectName(String subjectName);
	
	List<Subject> findByCourse(Course c);
}
