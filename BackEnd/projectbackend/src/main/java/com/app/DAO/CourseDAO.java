package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Course;

@Repository
public interface CourseDAO extends JpaRepository<Course,Integer>{
	Course findByCourseName(String courseName);
	
	Course findByCourseId(int course_id);
}
