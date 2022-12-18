package com.app.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Student {
	@Id
	private long prn;
	private String name;
	private String password;
	private String email;
	private Date dateOfBirth;
	private String address;
	private long mobileNo;
	
	@ManyToOne	
    @JoinColumn(name = "courseId")
    Course course;

	@OneToMany(cascade = CascadeType.ALL)
    private Set<ModulePerformance> modulePerformance;
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(long prn, String name, String password, String email, Date dateOfBirth, String address,
			long mobileNo, Course course) {
		super();
		this.prn = prn;
		this.name = name;
		this.password = password;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.mobileNo = mobileNo;
		this.course = course;
	}

	public long getPrn() {
		return prn;
	}

	public void setPrn(long prn) {
		this.prn = prn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}	
}
