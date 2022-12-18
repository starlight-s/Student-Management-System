package com.app.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity
public class Subject {
	@Id
	private int subjectId;
	private String subjectName;
	
	 	@ManyToOne	
	    @JoinColumn(name = "courseId")
	    Course course;
	 	
	 	@OneToMany(cascade = CascadeType.ALL)
	    private Set<ModulePerformance> modulePerformance;

	public Subject(int subjectId, String subjectName, Course course) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.course = course;
	}

	public Subject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}
	
	
}
