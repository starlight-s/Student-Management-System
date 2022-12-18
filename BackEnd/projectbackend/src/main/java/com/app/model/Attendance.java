package com.app.model;

import java.util.Date ;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Attendance {
		
	/*
	 * @GeneratedValue(strategy = GenerationType.IDENTITY) private int pm_id;
	 */
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "prn") 
	 * Student student;
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int srNo;
	
	private long prn;
	private String Stud_Name;
	private String courseName;
	private String subjectName;
	
	@Temporal(TemporalType.DATE)
	private Date Date=new Date(System.currentTimeMillis());
	public Attendance(int srNo, long prn, String stud_Name, String courseName, String subjectName,
			java.util.Date date) {
		super();
		this.srNo = srNo;
		this.prn = prn;
		Stud_Name = stud_Name;
		this.courseName = courseName;
		this.subjectName = subjectName;
		Date = date;
	}
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getSrNo() {
		return srNo;
	}
	public void setSrNo(int srNo) {
		this.srNo = srNo;
	}
	public long getPrn() {
		return prn;
	}
	public void setPrn(long prn) {
		this.prn = prn;
	}
	public String getStud_Name() {
		return Stud_Name;
	}
	public void setStud_Name(String stud_Name) {
		Stud_Name = stud_Name;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public Date getDate() {
		return Date;
	}
	public void setDate(Date date) {
		Date = date;
	}	
}
