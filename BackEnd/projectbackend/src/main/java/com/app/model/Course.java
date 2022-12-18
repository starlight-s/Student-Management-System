package com.app.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Course {
	
	@Id
	private int courseId;
	private String courseName;
	
	 @OneToMany(cascade = CascadeType.ALL)
	    private Set<Subject> subject;
	 
	 @OneToMany(cascade = CascadeType.ALL)
	    private Set<Student> student;
	 
	 @OneToMany(cascade = CascadeType.ALL)
	    private Set<Notice> notice;
	 
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course(int courseId, String courseName) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
}
